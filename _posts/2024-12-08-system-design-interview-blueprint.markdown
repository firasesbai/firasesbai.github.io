---
layout: post
title:  "System Desing Interview Blueprint"
date:   2024-12-08
modified_date: 2025-06-09
category: articles
tags: ["Data Engineering", "General"]
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
- **API Gateway**: An API gateway acts as a single entry point for clients accessing APIss providing centralized management. It can perform tasks like:
  - parameter validation of HTTP requests
  - allow-list/deny-list checks
  - authentication and authorization via identity provider
  - apply rate limiting rules
  - routing and service discovery
  - protocol conversion to backend microservice
- **Rate Limiter**: a rate limiter is used to control the rate of traffic requests sent by a client or a service. If the requests count hits the threshold defined by the rate limiter, all the following reuqests are blocked. The benefits of using a rate limiter include preventing resource starvation caused by Denial of Service (DoS) attack and reducing cost by requiring fewer servers and preventing these from being overloaded. 
Some popular rate limiting algorithms include:
    - Token bucket
    - Leaky bucket
    - Fixed window
    - Sliding window 
   
   For more information check out [this link](https://www.geeksforgeeks.org/rate-limiting-algorithms-system-design/)
- **Proxy**: A proxy server acts as an intermediary between clients and a server, handling requests from the client and forwarding them to the server. It can be used for various purposes, including filtering content, providing anonymity, and caching web pages.
- **Reverse Proxy**: A reverse proxy sits in front of one or more servers and acts as a single entry point for clients accessing those servers. It handles incoming requests, caches content, provides load balancing, and can also enhance security by hiding the actual server IP addresses and handling encryption and decryption of SSL communications. 
- [Load Balancer](https://github.com/donnemartin/system-design-primer?tab=readme-ov-file#load-balancer)

### Security ###
- [User Identity Management](https://bytebytego.com/guides/session-cookie-jwt-token-sso-and-oauth-2/)
- **HTTPS**: secures web communication by building upon TCP. It starts with a **TLS handshake**: your browser validates the website's identity using its SSL/TLS certificate (which contains its public key) and is verified by a trusted CA. This public key is then used in **asymmetric encryption** to securely exchange a shared secret key. Once established, all subsequent data transfer is encrypted using this shared secret key via much faster **symmetric encryption**. Asymmetric encryption is slower, so it's only used for the initial secure setup, while faster symmetric encryption handles the continuous data flow, so this two-phase approach ensures both secure identity verification and efficient data privacy.

### Software Architecture ###
- **Blue-Green Deployment**: With blue-green deployment, we have two identical environments: one is staging (blue) and the other is production (green). The staging environment is one version ahead of production. Once testing is done in the staging environment, user traffic is switched to the staging environment, and the staging becomes the production. This deployment strategy is simple to perform rollback, but having two identical production quality environments could be expensive.
- **Canary Deployment**: A canary deployment upgrades services gradually, each time to a subset of users. It is cheaper than blue-green deployment and easy to perform rollback. However, since there is no staging environment, we have to test on production. This process is more complicated because we need to monitor the canary while gradually migrating more and more users away from the old version.

### Database and storage ###
- **Database choice**: 
<figure>
  <img src="/assets/images/articles/20_database_choice.png" alt="comparison between types and characteristics of databases">
  <figcaption>Figure 1: Types of Databases - <a href="https://blog.bytebytego.com/p/understanding-database-types">Image Source</a></figcaption>
</figure>


- [Consistent hashing](https://www.geeksforgeeks.org/consistent-hashing/)
- **Pessimistic vs Optimistic Locking**: Pessimistic locking assumes conflicts will occur and locks the data before any changes are made. It prevents other users from accessing and updating the data until the lock is released. The most common way to implement this is by using ``` SELECT... FOR UPDATE```. 
Optimistic locking assumes conflicts are rare. It allows multiple users to access data simultaneously and checks for conflicts when changes are committed. If a conflict is detected, the operation is rolled back. The most common way to implement it is by adding a version column to your database table. 

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

[https://bytebytego.com/guides/how-to-deploy-services/](https://bytebytego.com/guides/how-to-deploy-services/)

[https://bytebytego.com/guides/8-common-system-design-problems-and-solutions/](https://bytebytego.com/guides/8-common-system-design-problems-and-solutions/)

[https://github.com/donnemartin/system-design-primer](https://github.com/donnemartin/system-design-primer)
