---
layout: post
title:  "System Desing Interview Blueprint"
date:   2024-12-08
modified_date: 
category: articles
tags: ["Data Engineering"]
author: Firas Esbai
description: "General guidelines and a reference framework to use when approaching system design interview"
comments: true
---

*This article contains general guidelines and a reference framework to use when approaching system design interview.*

System design interview is a key component of the technical interview process that is no longer limited to big tech companies or traditional software engineering positions. Even though each company is different, a system design round is not uncommon for data engineering positions especially for senior and more experienced roles. 

The purpose of this step is to assess your ability to design large-scale, complex software systems from scratch focusing on your problem solving skills and communication and collaboration capabilities.

*So let’s get started!*

{% include table-of-content.html %}

## General Concepts ##

While there is no shortage of information or resources on the internet when it comes to system design interview preparation, following is a list of some concepts and topics that I personnaly found common and almost always used in every system and thus you should be familiar with before going to the interview: 

### API and Web Development ###
- [API Architecture Styles](https://bytebytego.com/guides/a-cheatsheet-on-comparing-api-architectural-styles/)
- [API Design](https://bytebytego.com/guides/a-cheat-sheet-for-api-designs/)
- **Rate Limiter**: a rate limiter is used to control the rate of traffic requests sent by a client or a service. If the requests count hits the threshold defined by the rate limiter, all the following reuqests are blocked. The benefits of using a rate limiter include preventing resource starvation caused by Denial of Service (DoS) attack and reducing cost by requiring fewer servers and preventing these from being overloaded. 
Some popular rate limiting algorithms include:
    - Token bucket
    - Leaky bucket
    - Fixed window
    - Sliding window 
   
   For more information check out [this link](https://www.geeksforgeeks.org/rate-limiting-algorithms-system-design/)
- [Load Balancer](https://github.com/donnemartin/system-design-primer?tab=readme-ov-file#load-balancer)

### Database and storage ###
- **Database choice**: 
<figure>
  <img src="/assets/images/articles/20_database_choice.png" alt="comparison between types and characteristics of databases">
  <figcaption>Figure 1: Types of Databases - <a href="https://blog.bytebytego.com/p/understanding-database-types">Image Source</a></figcaption>
</figure>


- [Consistent hashing](https://www.geeksforgeeks.org/consistent-hashing/)

### Caching and performance ###
- [Content Delivery Network (CDN)](https://github.com/donnemartin/system-design-primer?tab=readme-ov-file#content-delivery-network)
- **Caching**: it improves load times and can reduce the load on your servers and databases. It is important to understand the different layers where caching can be applied, their advantages and disadvantages and strategies to update your cache. These would include:
    - Client caching
    - CDN caching
    - Web server caching
    - Database caching
    - Application caching

## Workflow ##

### Step 1: Design Scope ###

Generally you will be tasked with designing a well known system or application that is used by hundreds if not millions of users with a broad and ambiguous statement. Obviously coming up with all the potential problems, edge cases and details around the ultimate solution is not a one session task. The system in question came to its current state after years of cumulative efforts from multiple engineering teams and designing something similar in the current context and scope is not a realistic expectation nor a feasible task. Therefore, a good starting point would be to define the scope of the design and what you want to achieve during the interview. 

#### General questions ####

Start by asking some general questions to better understand the requirements. Make sure to take notes of any assumptions and decisions made along the way. 

Following are some questions to consider: 

- What are the most important features?
- Is this a mobile app, a web app or both?
- How many Daily Active Users (DAU) does the product have?
- Can we leverage some of the existing cloud infrastructure provided by Amazon, Google or Microsoft?
- Is encryption required?

#### Problem specific questions #### 

Building up on these, make sure to dive deeper in your conversation with your interviewer on more problem specific questions to clarify any ambiguities. 

#### Non Functional Requirements ####

After clarifying the requirements, it is important to understand the non functional aspects of your system which will guide you in your design choices since they are a crucial part of any large scale system.

Some areas to consider would be:

- Reliability
- Scalability
- High Availability
- Fault tolerance

#### Back of the envelope estimation ####

A final part of defining your scope would involve doing back-of-the-envelope calculations. Weather your interviewer asks you to do it or not, these estimations help you assess which design will meet your requirements. 

These calculations will be based on the requirements and agreed upon assumptions form your previous questions and common performance numbers. You you should familiarize yourself with these numbers [here](https://github.com/donnemartin/system-design-primer?tab=readme-ov-file#appendix).

### Step 2: High Level Design ###

After clarifying the design scope, now it is time to identify the key components of your system. These are the high level components that you are going to work with for the rest of the interview. As you progress, you will be adding more details to your design along the way so the point here is to really start at a high level even if it seems oversimplified. This will serve as a baseline as you work with the interviewer on identifying the right level of detail needed. 

### Step 3: Design Deep Dive ###

Based on your domain of expertise, choose the part you feel most comfortable with and start diving deeper on its key components. For example, when starting at the database layer you could discuss the factors to consider when selecting the appropriate database technology such as scalability, performance and data consistency and model. For someone else this could be the API layer where they can discuss the appropriate architecture style to choose and give an example of some API endpoints requests, parameters and responses. 

While covering different parts of the system, it is important to consider system optimizations and cost savings aspects to ensure your system handles the requirements previously identified in the most efficient way.  

Make sure to also discuss some scenarios and user journeys to demonstrate how your proposed system supports how the users would eventually interact with it.

### Step 4: Wrap up ### 

At this stage you should be approaching the end of the session. It could be useful to give the interviewer a recap of your design. Since there is always something to improve, use this opportunity to mention potential improvements in order to handle more scale or refinements you could do if you had more time especially if you had to do some tradeoffs at the beginning. Discussing things like monitoring and logging and error handling in case of failures of different components in your system are worth touching upon and would demonstrate your critical thinking. 

## Common System Design Use Cases ##

Following is a list of common system design questions and real world applications each with a set of unique challenges, requirements and type of data.  

- File storage and collaboration platform
    - Dropbox
    - Google Drive
- Messaging application
    - Slack
    - Facebook messenger
    - Whatsapp
    - WeChat
- Music streaming platform
    - Spotify
- News feed system
    - Facebook news feed
    - Instagram feed
    - Twitter timeline
- Ride sharing app
    - Uber
- Video streaming service
    - Netflix
    - Youtube
- Online Marketplace
    - Airbnb
- E-commerce Platform 
    - Amazon.com

With this we have reached the end of this post, I hope you enjoyed it!

If you have any remarks or questions, please don’t hesitate and do drop a comment below.

*Stay tuned!* 

## Recap ##

This article presented a mental model with a logical set of steps to follow when approaching a system design interview enriched with pointers to an opinionated set of topics and concepts to review beforehand.  

*Happy learning and good luck on your system design interview!*

## Resources ##

[https://www.goodreads.com/en/book/show/54109255](https://www.goodreads.com/en/book/show/54109255)

[https://www.goodreads.com/en/book/show/60631342](https://www.goodreads.com/en/book/show/60631342)

[https://github.com/ByteByteGoHq/system-design-101](https://github.com/ByteByteGoHq/system-design-101)

[https://github.com/donnemartin/system-design-primer](https://github.com/donnemartin/system-design-primer)
