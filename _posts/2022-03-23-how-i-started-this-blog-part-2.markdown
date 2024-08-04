---
layout: post
title:  "How I Started This Blog Part 2"
date:   2022-03-23
category: articles
tags: ["Blogging"]
author: Firas Esbai
description: "In this article we will integrate some jekyll plugins to add a sitemap and improve your SEO ranking and lighthouse score of your blog"
comments: true
---

*In this article we will see how to make your Jekyll blog more discoverable.* 

![image](/assets/images/articles/6_how_i_started_this_blog_part_2.jpg)

In a previous [post], we went through the building bloks of a Jekyll blog, how to set one up and host it using github pages. 

In this second article, part of the *How I Started This Blog* series, we will build upon what we already have by adding some features that will make your blog posts more discoverable and reachable to your audience.

*So let's get started!* 

{% include table-of-content.html %}

## Jekyll Sitemap Generator Plugin ##

### What is a Sitemap? ###

A sitemap is a file where you provide information about the pages, videos, and other files on your site, and the relationships between them. 
Search engines like Google read this file to crawl your site more efficiently. A sitemap tells Google which pages and files you think are important in your site, and also provides valuable information about these files. 
For example, when the page was last updated and any alternate language versions of the page.

For more information you can check the following [link]

You can only benefit from having a sitemap for your website to improve its crawling even if your site’s pages are properly linked. 
Especially when the sitemap is generated automatically using in this case the **Jekyll Sitemap Generator Plugin**. 

### Set up ###

In order to set this up for your blog you need to do the following:

1. Add `gem jekyll-sitemap` to your site's Gemfile and run bundle
2. Add the following to your site's **_config.yml** file:

{% highlight ruby %} 
url: "https://example.com" # the base hostname & protocol for your site
plugins:
  - jekyll-sitemap
{% endhighlight %}

That's it! You are good to go. 

For additional information, you can check the official Github [repository] of the plugin.

## Jekyll SEO Tag Plugin ##

After creating a sitemap for your blog, another useful plugin to add is the **Jekyll SEO Tag Plugin**. 
This is a Jekyll plugin to add metadata tags for search engines and social networks to better index and display your site's content. 

### Set up ###

In order to set this up for your blog you need to do the following:

1- Add `gem jekyll-seo-tag` to your site's Gemfile and run bundle

2- Add the following to your site's **_config.yml** file:
   
   {% highlight ruby %}
   plugins:
    - jekyll-seo-tag
   {% endhighlight %}

3- Add the following {% raw %}**{% seo %}**{% endraw %} tag right before `</head>` in your default layout

4- Add a description for every article in your blog 

You can find more information on SEO optimisation in Jekyll website [here]. 

After finishing the necessary configuration steps and have integrated both plugins in your blog you can check the results and their impact by verifying the generated html pages. 

You can also use the **google lighthouse** tool from your chrome browser to generate a report about the performance of your site for different categories and metrics like seen in the screenshot below.
Some useful hints and tips on how to further improve your site are also given to you in order to fix some common problems and enhance the user experience.  

![image](/assets/images/articles/6_lighthouse_results.PNG)
<br />*Figure 1: Lighthouse Results*

With this we have reached the end of this post, I hope you enjoyed it! 

If you have any remarks or questions, please don't hesitate and do drop a comment below. 

*Stay tuned!*

## Recap ## 

In this article we discussed the building blocks for our Jekyll blog and how to host it.

*Happy learning!*

## Resources ##

[https://vilcins.medium.com/optimize-your-jekyll-powered-website-with-these-simple-steps-b2a24d66a629]

[post]: https://firasesbai.github.io/articles/2021/10/07/how-i-started-this-blog.html
[link]: https://developers.google.com/search/docs/advanced/sitemaps/overview
[repository]: https://github.com/jekyll/jekyll-sitemap 
[here]: https://jsinibardy.com/optimize-seo-jekyll
[https://vilcins.medium.com/optimize-your-jekyll-powered-website-with-these-simple-steps-b2a24d66a629]: https://vilcins.medium.com/optimize-your-jekyll-powered-website-with-these-simple-steps-b2a24d66a629
