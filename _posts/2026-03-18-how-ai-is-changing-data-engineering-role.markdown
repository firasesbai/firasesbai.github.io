---
layout: post
title:  "How AI is Changing the Data Engineering Role"
date:   2026-03-18
category: articles
tags: ["Data Engineering"]
author: Firas Esbai
description: "How AI is reshaping data engineering, from business context and data pipelines to data quality, RAG, vector databases and new architectures"
comments: true
image: "/assets/images/articles/31_creator_claude_code_tweet.png"
pinned:
---

*In this article, I will highlight some of the changes that I'm seeing in the field and how they are impacting the role of the data engineer.*

The recent developments in the AI space have impacted the way people live and work. This is particularly true for software and data engineers. Statements like *"Coding is largely solved"* and predictions that most code will be AI generated in some near future (timeline is different depending on whom you're asking) have definitely contributed, among other things, to a challenging job market especially for entry-level and junior profiles.

In such an environment, and as the coding agents and models keep getting better, it is time to embrace the fact that change is inevitable and identify how exactly AI is affecting our jobs and what can we do about it.

*So let's get started!*

{% include table-of-content.html %}

## Why Business Context Matters More for Data Engineers ##

Early in your career, it is natural to lean towards focusing on the technical skills in order to build a good foundation. However, this approach will only get you so far. Data engineers operate at the intersection of business strategy and technology. The role of the data engineer is not just building and maintaining pipelines. While that is still important, understanding the business context and being able to translate the requirements is what makes you a better data engineer.

Business stakeholders will ask you for example to provide a real-time dashboard. But what does it really mean real-time here? Maybe they meant the data needs to be up to date when they look at it every morning? Maybe they need the data to be accurate when they generate a report from it once a week? Jumping into solutioning mode without clearly understanding the requirements will result in an over-engineered and expensive solution. In the age of AI, this becomes even more important.

Data engineering is definitely not going away. It might be called differently at some point but a data pipeline is still a data pipeline. You just have to understand what it is feeding.

For example, training a large language model (LLM) requires a lot of data. This data is usually unstructured and spread across different sources and APIs. Processing the data, storing it and making it available across the different stages of the model training still requires data engineering expertise. As not every company will be training its own language model, we can take another emerging pattern as an example: *RAG*.

RAG stands for Retrieval-Augmented Generation. It is a cost-effective approach to overcome the limitation of outdated data and improve the output of the model or agent by feeding the correct internal data. Who knows better than the data engineering team which data to ingest? How to transform it and how to best store it for faster retrieval? This is all still data engineering work and has nothing specific to AI.

While I can keep iterating on examples, you might argue though that since coding agents are getting much better nowadays, they are able to generate code for data transformation workflows, write SQL queries and create dashboards. However, this does not necessarily imply removing the human from the loop. How a pipeline is built depends on a good understanding of the business and its unique needs. Without this context, these agents will just end up hallucinating and making things up.

You should treat them as tools that support and amplify your work by cutting down time on grunt work and boilerplate code. This will allow you to focus more on high-level design and optimizations.

As the creator of Claude Code said:

{% include image.html
   src="/assets/images/articles/31_creator_claude_code_tweet.png"
   alt="Tweet from the creator of Claude Code"
   caption='Figure 1: Tweet from the creator of Claude Code- <a href="https://x.com/bcherny/status/2022762422302576970">Source</a>'
%}

Therefore, understanding how these coding agents work and how to integrate them in your workflow is necessary. For a practical guide on AI coding agents, check out [this article](https://www.firasesbai.com/articles/2026/02/04/ai-coding-agents.html). You can also read about my own experience with these tools in [Learnings from Vibe Coding](https://www.firasesbai.com/articles/2025/09/25/vibe-coding-learnings.html).

## Why Data Quality Still Matters in the Age of AI ##

As the volume of the data that we need to process is only going to increase, so are the stakes in your data quality. Flawed and poor quality input data inevitably produces similar output quality. This is what is known as: *Garbage in, Garbage Out.*

This is not a new problem. Data quality has been one of the biggest pain points for data teams fighting erroneous, missing or otherwise inaccurate data. The impacts of bad data go beyond drawing bad insights and sometimes even wrong conclusions. It can also result in wasted resources and money. If teams have to correct these failures all the time through backfilling pipelines, depending on the scale of data, this could take up many hours both in terms of compute and engineering capacity. In addition, it will affect product adoption and damage the overall organization's reputation.

Now building AI systems also requires high-quality trustworthy data. If an organization is still struggling with data quality issues, any AI initiative will probably fail. AI adoption is accelerating and most companies are investing in it but without prioritizing the foundational building blocks, like having good data quality for starters, it will only lead to project failures. This is why I think the data engineer's role will become even more important going forward. Supporting AI initiatives requires improving and maintaining good data quality and designing systems that meet the new scale, which we will discuss in the next section.

## Same Data Engineering Principles, New Architectures ##

Thinking in abstractions has been helpful in navigating this crazy landscape. An example in the data field would be the [Modern Data Stack](https://www.firasesbai.com/articles/2023/09/10/understanding-modern-data-stack.html). While a stack is just a combination of technologies and components, they do provide structure for building solutions. A recent similar emerging idea is the *AI Stack*. The purpose of this article is not to dive into the latter, but rather use it as a reference to highlight a key component around data engineering. There are multiple definitions out there for this new stack and its components but in each one of them we have a data layer. Given the specific requirements needed for building AI applications and the sheer amount of data, data engineers are faced with new challenges.

Continuing with the RAG use case mentioned earlier and in order to provide relevant context to the model, external data need to be fed in the form of numerical vectors called embeddings. 

To achieve that, the high-level process involves splitting the data into smaller chunks, transforming them into embeddings and storing them in a specialized database called vector database. For a hands-on example of this process, check out how I [built semantic search for this blog](https://www.firasesbai.com/articles/2026/01/24/building-semantic-search.html). These are optimized for storing, indexing and searching high-dimensional vector embeddings. While it may seem as a new type of architecture, underneath it is mainly about setting up pipelines, ingesting the data, managing the data flow, optimizing the embeddings and retrieval; all the things you would expect a typical data engineering team to be doing. As the volume of vector data grows, maintaining low-latency search and efficient indexing becomes challenging. In addition, ensuring fine-grained access control, encryption at rest and in transit, and audit trails are essential components of governance that need to be put in place.

## Recap ##

The data engineering role is integral to the business and holds a central role in bringing AI initiatives to life. Having a strong data foundation is not optional for any AI initiative's success and that puts the spotlight on data engineers who are no longer working behind the scenes. It goes without saying that while data engineering teams have seen AI-led productivity improvements, complexity has also increased. Data engineers need to embrace the change as the role will evolve significantly and the day-to-day activities will change.

With this we have reached the end of this post, I hope you enjoyed it!

If you have any remarks or questions, please don't hesitate and do drop a comment below.

*Happy learning!*
