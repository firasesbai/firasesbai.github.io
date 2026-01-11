---
layout: post
title:  "Data Platform Engineering"
date:   2026-01-11
category: articles 
tags: ["Data Engineering", "AI Engineering"]                  
author: Firas Esbai
description: "modern data platform engineering, components, benefits and impact of AI including LLMs and agents."
comments: true
image: "/assets/images/articles/29_data_platform_engineering_meme.png"
pinned:
---

*In this article, we dive into data platforms, their components and the impact of AI with the rise of large language models and autonomous agents.* 

In the data engineering capabilities and personas' [article](https://www.firasesbai.com/articles/2025/05/25/data-engineering-capabilities-and-personas.html), we looked at some emerging constellations of data teams and the general responsibilities associated with them. One area we mentioned was data platform engineering. While having already touched on some aspects needed for building a data platform, we will attempt in this article to further explore this topic starting with what exactly is a data platform and where AI will likely play a role in it. 

*So let’s get started!*

{% include table-of-content.html %}

## What is a Data Platform? ##

For a variety of reasons, main one being marketing, the term "*platform*" has become overloaded with different meanings in different contexts and the term data platform is no exception. 

The Data Warehouse was probably the first attempt at a centralized data platform. As we have seen [here](https://www.firasesbai.com/articles/2024/11/17/evolution-analytical-data-architectures.html), things evolved in the big data era and the concept of the data lake emerged as a response to the previous limitations. A modern version or the modern data stack as it is often referenced to, represents a shift from focusing on a single technology to focusing on the entire data lifecycle. It is not a single tool, but an integrated ecosystem of tools designed to cover every step of the data flow. 

Another natural evolution would then be the self-service data platform. Data engineering teams suffering through many ***"can you quickly pull this data for me?"*** kind of requests, the self service aspect is a process that makes it easier for the end users looking to "*quickly*" access some data to find it, understand its meaning and how they can use it and remove them from the process to some degree. This will enable non-technical users like marketing managers and sales leads to build their own views, filter their own data, and answer their own questions.


{% include image.html 
   src="/assets/images/articles/29_data_platform_engineering_meme.png" 
   alt="quickly pull this data for me meme" 
%}

<br/>

Before looking into the components of a data platform, other variations that would fit under the umbrella concept of the ***"data platform"*** include:
- **Data Stack**: a collection of various tools wired together to perform the platform's functions.
- **Data Fabric**: A unifying technology layer that provides centralized access and governance across data that is _physically_ stored in many different places.
- **Customer Data Platform**: A platform specifically focused on consolidating and unifying all customer data (sales, web, app, email) to create a single, actionable "360-degree view" of a customer.


## Layers of a Data Platform ##

One way to think about the components of a data platform is through layers. Each layer will contain a set of tools that, stacked together cover the end to end lifecycle of data. 

### Ingestion Layer ###

This is the starting point of any data platform. Data within an organization is usually scattered across multiple systems and the objective is to consolidate it into one place. This usually starts with identifying the required data sources and how to access them. Patterns such as Change Data Capture (CDC) and automated pipelines would be part of this layer copying new data and moving it to the next storage layer.   
### Storage Layer ###

The storage layer provides a centralized and scalable way for storing and managing the data in a way that it can be accessed, queried, and updated easily. Choosing the right storage technology and data models are key considerations to keep in mind. The decision will also depend on the type of data, volume, size and maturity of the organization. Options include data warehouses, data lakes and recently the rising adoption of data lakehouses. It is worth mentioning that it's not unusual to find organizations that have a combination of multiple data management solutions at once.  
### Processing Layer ###

While it might be tricky to draw a clear boundary around this layer, the main purpose is usually preparing data by executing a set of transformations on it. It can be thought of as an enabler to the other layers and hence used multiple times across the data lifecycle especially as we get closer to the consumption layer where the data needs to be accessible and easily consumable by different teams each having a different set of requirements. Therefore, similar to the ingestion layer for example, we also find complex data pipelines and orchestration tools to automate, manage and monitor the flow of data and execution of transformations.  
Depending on which technique is used, this layer represents the **T** in ETL/ELT patterns. These transformations include data cleaning such as removing errors or duplicates, schema validation and other data quality checks, normalization, aggregation and enrichment with other sources.    
### Consumption Layer ###

This is where the business value happens. The consumption of the data happens in different forms because the users of this layer can be both technical and non technical. For technical personas, they would probably look for new datasets to enrich their models with new features. Others would be interested in a dashboard that helps them gain insights into trends and patterns or review certain KPIs to make informed decisions. Another form of presenting the data is through reports that are intended for a specific type of stakeholders looking for a structured and easy to understand format. 
In this layer, the problem of your data engineering team becoming the bottleneck as we mentioned earlier manifests the most. Typically, the process involves submitting a new request for a report to the data team. You wait two weeks. They bring it to you. If you want to change a filter, you create a new request and wait again. However, the modern self service approach leverages governance to make the data accessible and ready for consumption making the feedback loop shorter.     
### Intelligence Layer ###

This is the biggest shift in the last two or three years. With the rise of Large Language Models (LLMs) and autonomous AI Agents, new use cases have emerged and are now being integrated across the different layers of the data platform. Yet, in my opinion, it still makes sense to reason about them as a logically separate layer. 

One of the patterns that have matured and became a default is **Retrieval-Augmented Generation** or shortly **RAG**. While LLMs are trained on large volumes of data and can generate an output for a variety of tasks, their responses will not be as effective against questions related to an organization's internal information. This data is proprietary and not publicly available to be included in the training data which leads the LLMs to hallucinate and make up things in an attempt to provide an answer. RAG is a cost effective approach to overcome this limitation and improve outputs by providing accurate, relevant answers grounded in internal data. 

On a high level, RAG works as follows:
1. **Retrieval**: When a user asks a question, the system first searches an external knowledge base (e.g., documents, databases) for relevant information.
2. **Augmentation**: The retrieved information is then added to the original prompt.
3. **Generation**: The LLM uses this combined information (original prompt + retrieved facts) to generate a more informed and factual response. 

Going deeper on this pattern is not the scope of this article, and we must highlight that this is obviously a simplified explanation and rather basic as things have evolved over time but still needed to understand its implications from a data platform perspective. 
Making the enterprise knowledge *RAG-ready* introduces new pipelines: fetching documents, splitting them into small chunks, generating embeddings and saving them into vector databases are all required steps that are increasingly becoming platform native.  As RAG matures, adoption of vector databases is accelerating and enterprises are adding vector-native storage and search features to enable high performance and scalable AI applications.  

Beyond RAG powered chat assistants, enterprises are also shifting towards **agents** that plan, call tools/APIs, and execute workflows autonomously. In generic terms, agents can be defined as LLM powered systems that have access to a set of tools that allow them to take actions in a certain environments. Therefore, RAG based assistant can be considered as an agent with a single tool that is the retriever part that searches and fetches relevant documents depending on the user query. Now that you can quickly search and interact with your documentation, you want to give your system access to your project management tool. This allows you to fetch ongoing issues related to your discussion, check their status and create follow up issues if needed. You can then deploy an autonomous bot that can answer support requests, provide links to relevant documentation, check systems' health and file bugs. 
These systems will continue to improve over time and become more capable but we should always bear in mind the risks that come with building a system where AI makes decisions automatically. That's why human‑in‑the‑loop is non‑negotiable for high‑impact actions taken by the agents as well as the importance of platform observability. Moving beyond established capabilities, we need to also integrate agent specific monitoring. Things like understanding their interactions with external tools, RAG performance, multi-step agent execution, tracing user queries and analyzing model responses will help ensure reliability, debug issues and optimize costs for these complex AI pipelines.    

Another clear trend is the move toward semantic, natural‑language access. Business users ask questions in plain language; assistants translate that into SQL, run governed queries, and return answers with citations. Modern platforms now embed this inside the warehouse/lakehouse and BI experiences, inheriting your RBAC/masking policies. This shortens feedback loops without bypassing governance.

These are some examples of new patterns and trends that I believe are probably here to stay. However, things will continue to evolve and we should expect more changes affecting all the layers of the data platform.  


## Benefits of a Data Platform ##

The main benefit of a data platform is to enable other teams. Your data team can't grow as fast as your data and the former will quickly become a bottleneck if every question requires a dedicated data engineer. In addition, by handling common laborious tasks at the platform layer such as infrastructure setup and governance, teams can innovate and iterate more quickly. This will result in self perpetuation of the platform by making data quickly available for other teams to consume and generate value from. 

In order to achieve this, the platform team needs to focus on the onboarding process making it easy for the other teams to join the platform. They need to take into consideration the maturity levels spectrum across the organization and account for when to enforce constraints and when to lower the entrance barrier. Faced with these challenges, a common pitfall is tool fatigue. It's easy to buy 15 different "best-in-class" tools that don't talk to each other trying to cover every aspect and accommodating every need in order to build the perfect platform. Depending on the platform adoption and perceived benefits, it will be very difficult to justify these costs down the line. The platform team should instead start small, gather user feedback and iterate quickly favoring simplicity over complex and over engineered solutions. 

With this we have reached the end of this post, I hope you enjoyed it!

If you have any remarks or questions, please don’t hesitate and do drop a comment below.

*Stay tuned!* 

## Recap ##

Building a data platform is a journey. Teams should start small and aim to getting data out of silos and into a place where other teams can actually use it. The goal isn't to have the fanciest technology. The goal is to stop arguing about _whose_ spreadsheet is right, and start making better decisions.

*Happy learning!*

## Resources ##

[https://www.startdataengineering.com/post/self-serve-data-platform/](https://www.startdataengineering.com/post/self-serve-data-platform/)

[ttps://www.confessionsofadataguy.com/building-data-platforms-from-scratch/](ttps://www.confessionsofadataguy.com/building-data-platforms-from-scratch/) 

[https://developer.nvidia.com/blog/building-scalable-ai-on-enterprise-data-with-nvidia-nemotron-rag-and-microsoft-sql-server-2025/](https://developer.nvidia.com/blog/building-scalable-ai-on-enterprise-data-with-nvidia-nemotron-rag-and-microsoft-sql-server-2025/)