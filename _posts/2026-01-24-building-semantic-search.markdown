---
layout: post
title:  "Building Semantic Search for This Blog"
date:   2026-01-24
category: articles        
tags: ["AI Engineering"]
author: Firas Esbai
description: "Guide on how to build a semantic search using fastapi, faiss and sentence-transformers on google cloud"
comments: true
image: 
pinned:
---

*In this article, I will guide you on how I build and integrated semantic search using Google Cloud for my site.*

We all have seen the exponential adoption of Large Language Models (LLMs) since the release of ChatGPT on November 2022 and the headlines that promise us something new every year; from Model Context Protocol (MCP) and CLI Coding Agents to autonomous multi-agents systems and Context Graphs, the list goes on. 
Taking a step back, this article is my first attempt to show you how to build AI use cases that actually work. Building is a great way of learning while also gaining insights into how these systems work under the hood. 

*So let’s get started!*

{% include table-of-content.html %}

## What is Semantic Search? ##

Semantic search is a way of finding information by meaning rather than exact keywords.  
Unlike traditional keyword search where the literal words in your query are matched to the same words in documents, semantic search converts both the query and the documents into vectors, known as _embeddings_ that capture their meaning. 
In essence, it is a nearest-neighbor search problem where, given a query, the top most _semantically similar_ items or vectors are retrieved based on some heuristic used to calculate the likelihood. 
The naive solution is k-nearest neighbors (k-NN), which in the context of our blog would follow these steps: 
1. Split all the blog posts into chunks, generate embeddings and save them into a vector store. 
2. Given a new search query, convert it to a vector embedding. 
3. Compute the similarity scores between the query embedding and all vectors in the database, using metrics such as cosine similarity.
4. Rank all vectors by their similarity scores.
5. Return _k_ vectors with the highest similarity scores.

## The Architecture ##

Before diving into implementation details, here's the high-level architecture:

{% mermaid %}
graph TB

subgraph "GitHub"

Blog[New Blog Post]

Repo[CI/CD workflow]

end

subgraph "Google Cloud"

CR[Cloud Run]

AR[Artifact Registry]

end

External[My Website]

Blog -->|Triggers| Repo

Repo -->|Build Image| AR

AR -->|Fetch All Posts<br/>Build Index| External

AR -->|Deploy| CR

classDef blue fill:#4285f4,stroke:#1a73e8,color:#fff

classDef orange fill:#f38020,stroke:#f38020,color:#fff

classDef green fill:#34a853,stroke:#188038,color:#fff

class CR,AR blue

class External orange

class Blog,Repo green
{% endmermaid %}
<p style="text-align:center;">Figure 1: High Level Architecture</p>

**The flow is simple:**

1. When I publish a new blog post, a GitHub workflow is triggered to rebuild the image of the backend serving the semantic search endpoint. 
2. Building the image involves fetching posts from the website, generating embeddings, and building a search index
3. The image is pushed to Artifact Registry and deployed to Cloud Run

With the high level flow defined, in the following sections we look in more details into the constraints that influenced the tech stack choices, faced challenges and implemented optimizations. 

## Tech Stack Choices ##

With the objective of keeping cost to a minimum, yet still having fast deployments, minimal operations and easily scalable solution, choosing a fully managed serverless platform for deploying the backend service became the clear answer. In addition, the generous free tier of Google Cloud made the decision easier to go with **Cloud Run**. 
Cloud Run enables you to run stateless containers on top of Google's scalable infrastructure.     
The free tier includes 2 million requests/month and enough memory and compute time for the amount of traffic that I'm expecting. Crossing these limits would only cost pennies on the dollar given that you only pay for what you use and you can always scale it down to zero. For more information on free tier usage limits, you can check [this page](https://docs.cloud.google.com/free/docs/free-cloud-features#cloud-run). 

Considering the choice of Cloud Run and the number of blog posts and expected size of the generated embeddings, I decided to go with an in-memory vector database. **FAISS** is Facebook's similarity search library. It is fast, in-memory and suitable for this scale. FAISS builds an index for fast similarity search and instead of comparing the query to every post which can be slow, it uses smart data structures to find the nearest neighbors quickly. Another required component that goes hand in hand with this is an embedding model. I used **sentence-transformers** library. It is a python framework for accessing and using state of the art embedding models. In addition, to keep the image size reduced, I used the`all-MiniLM-L6-v2` model which is around 90MB and generates 384-dimensional vectors.

Regarding the backend, I used **FastAPI**; modern, fast and high-performance web framework for building python based APIs with automatic API docs, and excellent type safety with Pydantic.

## Challenges and Optimizations ##

### Building the FAISS Index ###

In order to have faster container startup, I build the FAISS index during Docker image creation, not at runtime. This ensures consistent results across all instances since the filesystem is ephemeral and no external dependencies at runtime. 

### Automatic Index Updates ###

We keep the blog and the search backend in separate repositories to keep concerns isolated and releases simple. The open question was: how do we update the search index whenever a new post goes live?

To solve this, I added a GitHub Actions workflow in the blog repo that triggers on publishing and calls the GitHub REST API to send a `repository_dispatch` event to the backend repo with a custom `event_type=blog-updated`. The backend repo has a workflow that listens for that event; when it matches, it builds and deploys the Docker image and refreshes the index.

### Cold Start ###

When Cloud Run scales from zero, it takes between 5 and 10 seconds to start a container. This time includes the container startup time and loading of the embedding model as well as the FAISS index. 

Cloud Run has the option to allocate extra CPU during startup and which can be activated by this flag: 

`--cpu-boost`

In comparison to the size of the FAISS index, loading the embedding model, even a small one, on every cold start is slow. One solution to this would be caching the model to a specific location inside the container by adding the following line in your Dockerfile:

   {% highlight ruby %}
   {% raw %}   
    RUN mkdir -p /app/models && \
    /app/.venv/bin/python -c "from sentence_transformers import SentenceTransformer; model = SentenceTransformer('all-MiniLM-L6-v2'); model.save('/app/models/all-MiniLM-L6-v2')"
   {% endraw %}
   {% endhighlight %}

While keeping the minimum number of running instances set to 1 would solve the issue of the cold start completely, it would also result in extra costs. Depending on your traffic and usage of the search functionality in your system, you can opt for this alternative. For me the objective was to build and test the sematic search end to end and even though I could still face timeout errors occasionally when searching it is still acceptable for now. 

### Cost Optimization ###

Since Cloud Run charges for the resources you use and in order not incur additional costs after the free tier limits, the service shuts down and scales back to zero when there's no traffic and the Cloud Run service is idle. However, each time a new post is published, this results in a new image version. To avoid storage costs and stay within the free tier limit of Artifact Registry which is < 0.5 GB, I have applied the following cleanup policy to keep only the last 2 docker images: 

   {% highlight ruby %}
   {% raw %}   
    {
        "name": "keep-recent-2",
        "action": "DELETE",
        "condition": {
            "tagState": "UNTAGGED",
            "newerThan": "0s"
        },
        "mostRecentVersions": {
            "keepCount": 2
        }
    }
   {% endraw %}
   {% endhighlight %}

## What's Next? ##

Building a semantic search doesn't require expensive infrastructure. With open-source tools and serverless platforms, you can build production-quality services that scale and cost almost nothing. Having the core architecture in place, adding new use cases such as a recommendations endpoint based on the existing similarity search and vector database or potentially combining the semantic search with keyword matching for better results are now easier. Avoiding over engineered solutions and solving the problems as they araise avoids pre mature unnecessary optimizations. 

I'd love to hear your thoughts and know more about what AI projects you're currently working on. 

With this we have reached the end of this post, I hope you enjoyed it!

If you have any remarks or questions, please don’t hesitate and do drop a comment below.

*Stay tuned!* 