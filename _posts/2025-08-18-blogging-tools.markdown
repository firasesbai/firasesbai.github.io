---
layout: post
title:  "Blogging Tools"
date:   2025-08-18
modified_date: 
category: articles
tags: ["Blogging"]
author: Firas Esbai
description: "Discover the curated list of tools for writing and building this site, covering hosting, analytics, SEO, and speed optimization."
comments: yes
image: 
pinned:
---

*A curated list of tools that I'm using for writing and building this site.*

In this article, I have curated a list of resources and tools that help me manage everything from hosting and analytics to writing and working on this site. Finding the right tool can make a huge difference in terms of efficiency. While there are countless options out there, this is what works best for me.  

*So let’s get started!*

{% include table-of-content.html %}

## Writing and Planning  ##

### Trello ### 

Trello is a visual project management tool. I use it to organise the content workflow and capture ideas for potential articles. I keep it simple with just 3 lists representing the stages of the writing process: To Do, Doing, and Done. Each card within represents a blog post or some fixes or improvements to the site itself. To distinguish between them I use specific labels. This visual approach allows me to easily see what needs to be done and ensure I'm on track. 

### Obsidian ###

Obsidian is a markdown based note taking app. In this context, i use it for kicking off drafts, creating notes for each blog post and capturing relevant research. It allows for linking notes together and creating interconnected central knowledge base where you can easily jump between related notes to brainstorm and rediscover information.

## Domain and Hosting ##

### Cloudflare ###

While often thought of for performance and security (which I'll touch on later), Cloudflare also handles my DNS. It provides a fast and robust way to manage my domain's records. For more details, you can check [the following article](https://www.firasesbai.com/articles/2025/01/19/google-domains-cloudflare-migration.html) where I outline how I migrated from Google Domains to Cloudflare. 

### Github Pages ###

This is where the site physically lives. It's a free solution for hosting static websites like this one directly from a GitHub repository, and it integrates seamlessly with custom domains via Cloudflare.

## Analytics and Tracking ##

### Google Analytics 4 (GA4) ###

GA4 helps me understand traffic sources, user behavior, content performance, and conversions. It's the primary source for overall site metrics.

### Google Search Console ###

This is essential for understanding how my site performs in Google Search. It shows me search queries, indexing status, technical errors, and sitemaps. 

### Looker ###

I use Looker to create custom dashboards pulling data from GA4, Cloudflare Analytics, Search Console and Google Forms. This allows me to visualize key metrics in a centralised view without switching between tools and overcoming data discrepancies as indicated in [this article](https://www.firasesbai.com/articles/2024/08/11/cloudflare-vs-google-analytics.html) where I cover the difference between Cloudflare Analytics and Google Analytics. 

## SEO ##

### Ahrefs ###
I mainly use Ahrefs Webmaster Tools which gives you free access to a bundle of 3 tools if you can verify the ownership of your website. You can achieve this by connecting Google Search Console as the recommended approach. 
    - Web Analytics: You can setup web analytics for your site as an alternative to Google Analytics to get real time metrics about your visitors.
    - Site Audit: Scans your website for known technical and most common SEO issues such as broken links, duplicate content and missing metadata description. You can setup scheduled crawls of your site and get an email with an overview containing a health score of the site, number of issues grouped by severity and newly identified issues since the last crawl. This will allow you to proactively identify and fix issues to improve your site's performance.
    - Site Explorer: Helps you gain insights into your site's organic search performance  

### Screaming Frog ###

Screaming Frog is a desktop based website crawler with a free version limited to 500 URLs which is more than enough for a small blog. It acts as a search engine spider by crawling your site's URLs and extracting data to give you a comprehensive technical audit. By finding and fixing issues like broken links, you ensure a better user experience and help search engines properly crawl and index your site. 

### Google Chrome Lighthouse ###

As part of the Chrome browser's developer tools, Lighthouse provides a detailed report on the performance, accessibility, best practices and SEO of any web page. It is very handy for a quick and easy way to check the health of individual pages on the site locally before publishing them.  

## Add-ons ##

### Email Marketing ###

Building an email list is vital for direct communication with my audience. I've explored tools like **ConvertKit** and **Mailerlite**, both offering features to build and manage subscriber lists, create landing pages, and send broadcasts or sequences. I have settled for Mailerlite as the free plan was more interesting especially for starting out with small number of subscribers. 

### Comments ###
	
I use **Disqus** for managing comments on the blog posts. Originally I started out using Github API where I create an issue for each blog post and the comments section will redirect the users to commenting on the created issue. The list of all the comments is then fetched from the API. This was easy to setup initially but had limits as it requires the users to have a Github account and to be logged in. In addition, the overhead of maintaining the different issues made it easy to switch to Disqus as it provides a robust commenting system with moderation tools.

### Contact Form ###
	
I use an embedded **Google Forms** in my contact page to enable visitors of my site to reach out and handle their requests and inquiries.

## Speed Optimization ##

### Cloudflare ###

As mentioned earlier, using Cloudflare comes with the additional bonus of faster and more responsive website. This is achieved through its role as a Content Delivery Network (CDN). A CDN is a network of servers located all over the world. When a visitor comes to my blog, Cloudflare automatically serves the static content (like images, CSS, and JavaScript files) from the server closest to them. This dramatically reduces the physical distance the data has to travel, which in turn cuts down on page load times. 

### TinyPNG ###

Images are often the biggest culprit for slow page load times. TinyPNG is a free online tool that uses smart lossy compression techniques to reduce the file size of my images without a noticeable loss in quality.

### Google Pagespeed Insights ###

While using Google Chrome Lighthouse before publishing a post is useful for seeing how the introduced changes affect the performance, it is still run under controlled, simulated conditions such as throttled netweok speed on a specific device. This is where Pagespeed Insights comes in handy by complementing that with data on how real world visitors have experienced your site. It provides a holistic view of performance for both mobile and desktop with a list of actionable recommendations. This is a more accurate representation of how your site performs for your actual audience, across various devices and network conditions.

If you have any remarks or suggestions for me, please don’t hesitate and do drop a comment below.

*Stay tuned!* 

## Recap ##

This is not an exhaustive list but rather a work in progress. Each tool serves a specific purpose in streamlining the process from writing to managing the site's performance. While the exact setup may evolve, the goal remains the same: keep things simple and effective. 

*Happy learning!*
