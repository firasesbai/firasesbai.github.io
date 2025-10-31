---
layout: post
title:  ""
date:   2021-01-01
category: articles
tags: []
author: Firas Esbai
description: ""
comments:
image: 
pinned:
---

*excerpt*

All the source code is available [here]() - `optional` 

*So let’s get started!*

{% include table-of-content.html %}

## Headline 1 ##

   {% highlight ruby %}
   {% raw %}   
   {% endraw %}
   {% endhighlight %}


## Headline 2 ##

| col 1 | col 2 |
| ------|:------|
| row 1 | row 1 | 

<p style="text-align:center;">Table 1: table alt txt</p>

## Headline 3 ##

<!-- With caption (for article images with sources) -->
{% include image.html 
   src="/assets/images/articles/XX_your_image_name.png" 
   alt="image alt txt" 
   caption='Figure 1: image description - <a href="">Image Source</a>' 
%}

<!-- Without caption (simple image) -->
{% include image.html 
   src="/assets/images/articles/XX_your_image_name.png" 
   alt="image alt txt" 
%}

## Headline 4 ##

<!-- Mermaid Flowchart - Great for system architecture, data flows -->
{% mermaid %}
graph LR
    A[Client] --> B[Load Balancer]
    B --> C[Server 1]
    B --> D[Server 2]
    C --> E[Database]
    D --> E[Database]
{% endmermaid %}

<!-- Mermaid Sequence Diagram - Great for API calls, interactions -->
{% mermaid %}
sequenceDiagram
    participant User
    participant API
    participant Database
    User->>API: POST /data
    API->>Database: INSERT query
    Database-->>API: Success
    API-->>User: 201 Created
{% endmermaid %}

<!-- Mermaid Class Diagram - Great for data models -->
{% mermaid %}
classDiagram
    class Order {
        +int orderId
        +Date orderDate
        +calculateTotal()
    }
    class Customer {
        +int customerId
        +String name
        +placeOrder()
    }
    Customer --> Order : places
{% endmermaid %}

<!-- More Mermaid examples at: https://mermaid.js.org/intro/ -->

With this we have reached the end of this post, I hope you enjoyed it!

If you have any remarks or questions, please don’t hesitate and do drop a comment below.

*Stay tuned!* 

## Recap ##

*Happy learning!*

## Resources ##

[Link text Here](https://link-url-here.org)