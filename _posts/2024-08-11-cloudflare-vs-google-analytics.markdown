---
layout: post
title:  "Cloudflare Analytics vs Google Analytics"
date:   2024-08-11
category: articles
tags: ["Blogging"]
author: Firas Esbai
description: "Reasons for discrepancies between data present in google analytics and data in cloudflare analytics"
comments: true
---

*In this article we will look into the reasons for discrepancies between the data reported by Cloudflare Analytics and Google Analytics and how to leverage both of them.*

Tracking and analyzing web data is essential for keeping a holistic view on your site’s performance. This is especially useful for bloggers to track key metrics such as which articles and pages are most visited, where visitors are located and the percentage of visitors who leave after viewing only one page just to name a few.

For monitoring this site’s performance, I have opted for integrating Google Analytics web service. In addition, I’m using cloudflare for managing a custom domain name. Cloudflare has implemented Analytics where users can also gain insights to their managed sites. These however show big discrepancies from the data present in Google Analytics. Understanding the reasons behind it is what we will try to accomplish in this blog post.

*So let’s get started!*

{% include table-of-content.html %}

## Data Collection Method ##

Understanding the different methods used by each tool to collect data will reveal the main reason for discrepancies in their reports.

### Server-Side Tracking ###

Cloudflare uses DNS and server-side data to track visits. This means it collects data on every request made to your website's server. This includes all HTTP/HTTPS requests, regardless of whether they are made by human users, bots, or automated scripts. Therefore, every unique IP address for a request is identified as a visit.

For this reason, Cloudflare Analytics probably will show higher unique visitors than Google Analytics unique pageviews because when a bot or API is consuming partial content from your site without loading the full page it counts as a unique visitor in Cloudflare but not as a pageview.

### Client-Side Tracking ###

Google Analytics uses a JavaScript tag embedded in web pages to collect data. When a user loads a page, the script sends data back to Google Analytics. Even though Google Analytics filters out known bot traffic, it can miss traffic from users who block Javascript, use privacy-focused browsers or have ad blockers that prevent Google Analytics from loading.

For this reason, Cloudflare Analytics probably will show higher number of visitors than Google Analytics.


## Types of Data Collected ##

Knowing the reason behind the data of both Cloudflare and Google Analytics was only the beginning. In this section, we will look into the type of data collected by them and its purpose.

### Cloudflare ###

Cloudflare often provides high-level technical data. It tracks every request made to your server which gives a comprehensive view of all incoming traffic and how many requests each resource on your website receives. In addition, Cloudflare provides data to help maintain the security and efficiency of your website such as blocked threats or DDoS attacks and cache hits/misses and load times.

### Google Analytics ###

Google Analytics excels in tracking how users interact with your website. It provides detailed metrics on page views, sessions, bounce rates, and conversion rates. Also, it tracks where your visitors come from, whether through organic search, paid ads, social media, or referrals. This will help you understand your users’ behavior and engagement and their journey through your website.

## Recommendation ## 

Leveraging data from both Cloudflare and Google Analytics offers a powerful combination of insights that will allow you to maximise your understanding of your website traffic along with detailed insights into user behavior and improve the performance and security.

One way to achieve this would be using [Looker Studio](https://lookerstudio.google.com/overview). 

Looker Studio is an online free tool by Google that will allow you to easily access data from multiple sources through its built-in connectors and visualise it through interactive reports and dashboards.

If you are using Google Analytics then getting your data into Looker Studio is just a few clicks away. However, for Cloudflare data it is a bit more than that.

Cloudflare web analytics is free and does not require an Enterprise plan but getting data into Looker Studio in an automated fashion would require a Cloudflare Enterprise account with Cloudflare Logs enabled. For more information, check this [link](https://developers.cloudflare.com/analytics/analytics-integrations/looker/).

An alternative workaround to visualize your Cloudflare data in Looker Studio can be achieved by exporting the collected data into Google Sheets first and then use the latter as a new data source in Looker Studio.

The data export step can be done either manually or using a script that sends requests to Cloudflare's API. Choosing one option over the other is up to you depending on your requirements and needs for up-to-date dashboards and how often you will review them.

With this we have reached the end of this post, I hope you enjoyed it!

If you have any remarks or questions, please don’t hesitate and do drop a comment below.

*Stay tuned!* 

## Recap ##

In this article we covered the reasons behind the difference of data gathered by Cloudflare Analytics and data coming from Google Analytics. We also saw how to use Looker Studio as a central reporting solution for combining both data sources for a comprehensive website analytics. 

*Happy learning!*

## Resources ##

[https://developers.cloudflare.com/analytics/faq/about-analytics/#4lt2VoRUorCudxN1xzxpOt](https://developers.cloudflare.com/analytics/faq/about-analytics/#4lt2VoRUorCudxN1xzxpOt)