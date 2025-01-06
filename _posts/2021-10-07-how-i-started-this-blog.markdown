---
layout: post
title:  "How I Started This Blog"
date:   2021-10-07
category: articles
tags: ["Blogging"]
author: Firas Esbai
description: "Detailed steps to create a blog packed with fundamental features using jekyll a static site generator and host it in github pages"
comments: true
image: "/assets/images/articles/4_how_i_started_this_blog.png"
---

*In this article we will see how to easily setup and publish your first blog website.* 

<figure>
  <img src="/assets/images/articles/4_how_i_started_this_blog.png" alt="logo of jekyll">
  <figcaption>Figure 1: What is Jekyll - <a href="https://www.geeksforgeeks.org/jekyll-vs-wordpress/">Image Source</a></figcaption>
</figure>

In a previous [post](https://firasesbai.github.io/articles/2021/04/12/why-i-started-this-blog.html), I mentioned five reasons that were behind the existance of this blog. Now, it is time to walk you through the journey of actually creating it.

In this article, we will start by setting up a simple blog using **Jekyll**, then enrich it with useful features to help you reach out and engage with your audience and finally deploy it easily using **GitHub Pages** and make it discoverable. 

*So let's get started!* 

{% include table-of-content.html %}

## What is Jekyll? ##

Jekyll is a free and open source ***static site generator*** written in *Ruby*. 

Jekyll is a Ruby Gem. Gems are nothing but code containing specific functionality that you can include and share between Ruby projects.  

## Why Jekyll? ##

Jekyll's **simplicity** and **minimalistic** approach gave it the upper hand over other tools such as Wordpress.  
By simply writing all of the content using *Markdown*, jekyll will then build and generate your static website. 
In fact it has no database, which made it **fast** and more **secure** since you are just serving static pages.   

## Getting Started ##

### Installation ###

Requirements:

+ Ruby
+ RubyGems

Since jekyll is a Ruby Gem, it can be installed by running the following command:
{% highlight ruby %} gem install jekyll {% endhighlight %}

Every Jekyll site has a **Gemfile** which is a file containing a list of gems used by your site.
A **Bundler** is a gem that installs all gems in your Gemfile. 

To install it, run the following command: 
{% highlight ruby %} gem install bundler {% endhighlight %}

For a detailed installation according to your operating system, check the following [link](https://jekyllrb.com/docs/installation/).

Using Gemfile and Bundler is optional but highly recommended as it ensures you’re running the same version of Jekyll and its plugins across different environments.

### Jekyll Themes ###

A good starting point for your blog should probably be Jekyll Themes. 
Jekyll has a large community where you can find community-maintained templates and styles that you can use out of the box to customize your blog. 

Running the following command will create a new Jekyll site powered by the **Minima** theme which is the one I'm actually using for this blog: 
{% highlight ruby %} jekyll new your-new-blog {% endhighlight %}

### Jekyll Structure ###

Understanding the structure of a Jekyll site is a crucial step to move your blog forward. 
You can find an explanation of the basic structure in the official [documentation](https://jekyllrb.com/docs/structure/). 

For example, the `_posts` folder is where you would write your first blog post. 

Now, you can build your site by running the following command:

{% highlight ruby %} bundle exec jekyll serve {% endhighlight %}

Finally, browse to `http://localhost:4000` and see how your blog looks like. 

## Features ##

After adding a couple of blog posts, it is time to enrich your website. In this section, we will go through a list of fundamental features and how to set them up to make your blog stand out and give your readers an enjoyable experience. 

### Jekyll Sitemap Generator Plugin ###

#### What is a Sitemap? ####

A sitemap is a file where you provide information about the pages, videos, and other files on your site, and the relationships between them. 
Search engines like Google read this file to crawl your site more efficiently. A sitemap tells Google which pages and files you think are important in your site, and also provides valuable information about these files. 
For example, when the page was last updated and any alternate language versions of the page.

For more information you can check the following [link](https://developers.google.com/search/docs/advanced/sitemaps/overview).

You can only benefit from having a sitemap for your website to improve its crawling even if your site’s pages are properly linked. 
Especially when the sitemap is generated automatically using in this case the **Jekyll Sitemap Generator Plugin**. 

#### Set up ####

In order to set this up for your blog you need to do the following:

1. Add `gem jekyll-sitemap` to your site's Gemfile and run bundle
2. Add the following to your site's **_config.yml** file:

{% highlight ruby %} 
url: "https://example.com" # the base hostname & protocol for your site
plugins:
  - jekyll-sitemap
{% endhighlight %}

That's it! You are good to go. 

For additional information, you can check the official Github [repository](https://github.com/jekyll/jekyll-sitemap ) of the plugin.

### Jekyll SEO Tag Plugin ###

After creating a sitemap for your blog, another useful plugin to add is the **Jekyll SEO Tag Plugin**. 
This is a Jekyll plugin to add metadata tags for search engines and social networks to better index and display your site's content. 

#### Set up ####

In order to set this up for your blog you need to do the following:

1- Add `gem jekyll-seo-tag` to your site's Gemfile and run bundle

2- Add the following to your site's **_config.yml** file:
   
   {% highlight ruby %}
   plugins:
    - jekyll-seo-tag
   {% endhighlight %}

3- Add the following {% raw %}**{% seo %}**{% endraw %} tag right before `</head>` in your default layout

4- Add a description for every article in your blog 

You can find more information on SEO optimisation in Jekyll website [here](https://jsinibardy.com/optimize-seo-jekyll). 

After finishing the necessary configuration steps and have integrated both plugins in your blog you can check the results and their impact by verifying the generated html pages. 

You can also use the **google lighthouse** tool from your chrome browser to generate a report about the performance of your site for different categories and metrics like seen in the screenshot below.
Some useful hints and tips on how to further improve your site are also given to you in order to fix some common problems and enhance the user experience.  

<figure>
  <img src="/assets/images/articles/6_lighthouse_results.PNG" alt="scores of lighthouse report">
  <figcaption>Figure 2: Lighthouse Results</figcaption>
</figure>

### Articles Reading Time ###

Adding an estimated reading time at the beginning of your articles improves your engagement with the readers, especially the ones with time-limited schedules and which will probably refrain or bounce from it if they think that the article is too long. 

#### How to estimate reading time? ####

Words Per Minute (WPM) is a measure of words processed per minute. According to this [Wikipedia](https://en.wikipedia.org/wiki/Words_per_minute ) article the average person reading speed of English is at 200 wpm on paper and 180 on a monitor. 

#### Set up ####

1- We start by creating a `reading-time.html` page under the `_includes` folder

2- Add the following code snippet in the newly created page: 

   {% highlight ruby %}
   {% raw %}   
   <span class="reading-time" title="Estimated read time">
   {% assign words = content | strip_html | number_of_words %}
   {{ words | divided_by:180 }} min read
   </span>
   {% endraw %}
   {% endhighlight %}

   This basically calculates the total number of words in a page and divides it by the average person reading speed. 
   We have also added the `strip_html` filter which removes any HTML tags from a string in order to have a more accurate reading time if you want to display this information in your home page as well. 

3- Finally all you need to do is to include this page in the **post layout** like this:  
   `{% raw %}{% include reading-time.html %}{% endraw %}` 

You should now be able to see the estimated reading time appear on every post of your blog.   

### Comments ###

Another feature that directly impacts the engagement with your readers is having a comments section. 

Usually people tend to use third party services, like [Disqus](https://disqus.com/), when it comes to adding comments for static sites. 
We on the other hand will be seeing how to leverage Github's API for commenting and integrate it by displaying Github issues comments on a static blog post.  

This might not be an ideal solution for everyone since it requires the person commenting to be logged in to Github. 
In my case, using this approach made sense since most of my articles are rather technical and would involve some code snippets or references to a Github repository. 
Besides the blog itself is hosted on Github using the free Github Pages hosting service. 

At the end we are only presenting one of many options and it is up to you to choose the best one for you depending on your requirements and needs.  

#### Set up ####

1. We start by adding the `issues_repository` variable in the `_config.yml` configuration file which will point to the Github repository where the comments will be added. 

2. For every post where you want to include a comments section add in the [Front Matter] section a predefined variable called `issue_id` which points to the issue number of the issue you created in the Github repository. 
  
3. Create a new `comments.html` file under the `_includes` folder. This is where the whole logic resides. Using the previously defined variables we fetch the existing comments using the Github API and load them. 
   You can find an example of this file [here](https://github.com/firasesbai/firasesbai.github.io/blob/2a75e109ca4d4243102572ef6aa2873a0285c150/_includes/comments.html).  

4. Finally in order to make the loaded comments appear on our pages, like the one we have at the bottom of this article you are currently reading, we need to add the following code snippet in the **post layout** page:
   {% highlight ruby %} 
   {% raw %}   
   {% if page.issue_id %}
    {% include comments.html issue_id=page.issue_id %}
   {% endif %}
   {% endraw %}   
   {% endhighlight %}

### Search ###

As the number of articles increases over time in your blog, it will be difficult to navigate and find a certain article that you are looking for. In this case, having search functionality becomes necessary. 

There are multiple ways to achieve this such as using Google Custom Search Engine or other paid services. Easiest solution though would be to use the [Simple Jekyll Instant Search](https://github.com/christian-fei/Simple-Jekyll-Search).

#### Set up ####

1- Create a **JSON** file called `search.json` in the root folder of your blog

2- Add the following code snippet in the newly created file: 

   {% highlight ruby %}
   {% raw %}   
   ---
   layout: none
   ---

   {% for post in site.posts %}
    {
      "title"       : "{{ post.title | escape }}",
      "category"    : "{{ post.category }}",
      "tags"        : "{{ post.tags | join: ', ' }}",
      "url"         : "{{ site.baseurl }}{{ post.url }}",
      "date"        : "{{ post.date }}",
      "description" : "{{ post.description | strip_html | strip_newlines | escape }}"
    } 
   {% unless forloop.last %},{% endunless %}
   {% endfor %}
   {% endraw %}
   {% endhighlight %}

   This will go over all your posts and extract for each one necessary information such as title, category, etc… that will be used to search through your articles. 

3- Create a new `search-script.js` under `/js/` folder in your root directory. You can find an example of it [here](https://github.com/firasesbai/firasesbai.github.io/blob/master/js/search-script.js).  

4- Create a `search.html` page under the `_includes` folder.

5- Add the following code snippet to it:

   {% highlight ruby %}
   {% raw %}   
   
   <!-- Html Elements for Search -->
   <div id="search-container">
   <input type="text" id="search-input" placeholder="search...">
   <ul id="results-container"></ul>
   </div>

   <!-- Script pointing to search-script.js -->
   <script src="/js/search-script.js" type="text/javascript"></script>

   <!-- Configuration -->
   <script>
   SimpleJekyllSearch({
   searchInput: document.getElementById('search-input'),
   resultsContainer: document.getElementById('results-container'),
   json: '/search.json',
   searchResultTemplate: '<div><a href="{url}"><h4>{title}</h4></a></div>'
   })
   </script>

   {% endraw %}
   {% endhighlight %}

6- Include the `search.html` page into your home page found under `_layouts/home.html` by adding the following line:
 
   {% highlight ruby %}
   {% raw %}   
   <div align="right"> {%- include search.html -%} </div>   
   {% endraw %}
   {% endhighlight %}

You should now be able to see a search bar, as shown below in the screenshot, and be able to type in keywords to find an article. 

<figure>
  <img src="/assets/images/articles/8_search_bar.png" alt="search bar image">
  <figcaption>Figure 3: Search Bar</figcaption>
</figure>


### Pagination ###

For the same reasons mentioned above, having a pagination system in place will make navigating your rich blog easier rather than making your readers scroll down endlessly.

#### Set up ####

1- Add `gem "jekyll-paginate-v2"` to your site’s Gemfile and run bundle 

2- Add the following to your site’s `_config.yml` file:
   {% highlight ruby %} 
   {% raw %}   
   # Pagination Settings
   pagination:
    enabled: true
    per_page: 5
    permalink: '/page/:num/'
    title: ' - page :num'
    limit: 0
    sort_field: 'date'
    sort_reverse: true
   {% endraw %}   
   {% endhighlight %}

   This will enable the pagination and sort your posts based on their release date having the latest at the top and a maximum of 5 articles per page. 

3-  Add the following code snippet to your home page found under `_layouts/home.html`:
   {% highlight ruby %} 
   {% raw %}   
    <ul class="post-list">
    <!-- 
        Here is the main paginator logic called.
    -->
    {% for post in paginator.posts %}
      <li>
      
        <h3> <a class="post-link" href="{{ post.url | relative_url }}">{{ post.title | escape }}</a></h3>
        <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>

        {%- if site.show_excerpts -%}
          {{ post.excerpt }}
        {%- endif -%}
      </li>
    {% endfor %}
    </ul>
  
    <!-- 
    Showing buttons to move to the next and to the previous list of posts (pager buttons).
    -->
    {% if paginator.total_pages > 1 %}
    <ul class="pager">
      {% if paginator.previous_page %}
      <li class="previous">
          <a href="{{ paginator.previous_page_path | prepend: site.baseurl | replace: '//', '/' }}">&larr; Newer Posts</a>
      </li>
      {% endif %}
      {% if paginator.next_page %}
      <li class="next">
          <a href="{{ paginator.next_page_path | prepend: site.baseurl | replace: '//', '/' }}">Older Posts &rarr;</a>
      </li>
      {% endif %}
    </ul>
   {% endif %}
   {% endraw %}   
   {% endhighlight %}
   
   This will render your posts in a list using the **paginator** variable provided by the gem and using the corresponding configurations you added in step 2.

That is it! If you have more then five posts, navigation buttons like shown below will appear at the bottom of your homepage in order to be able to visit your older posts. 

<figure>
  <img src="/assets/images/articles/8_navigation_buttons.png" alt="image showing 2 buttons for older and newer posts">
  <figcaption>Figure 4: Navigation Buttons</figcaption>
</figure>

## Deployment ##

### GitHub Pages ###

GitHub Pages is a static site hosting service that takes files from a repository on GitHub, optionally runs the files through a build process, and publishes a website.

You can create your own static files or use a static site generator to build them for you. Sounds familiar right? Yes, it is Jekyll!
GitHub Pages will use Jekyll to build your site by default.

This is another advantage of having a jekyll-powered blog because you get a free and easy to set up hosting service with GitHub Pages. All you have to do is create a repository and name it like the following: 
`<username>.github.io` where username is your user account.

Whenever you commit new changes, GitHub Pages will build the static website and serve it for you.

Everything is being taken care of; sit back and enjoy your blog at `https://<username>.github.io` . 

### Managing a custom domain for your Site ###

Using *GitHub Pages* worked out of the box for us and was a good starting point. Now that we have a fully functional website armed with all the features that we need, it is time to customise that URL by using a custom domain. 
This has multiple benefits namely better promoting our own brand, providing trust to our readers and making the site more discoverable. 

#### Set up ####

1- Head over to [Google Domains](https://domains.google/) and search for a new domain

2- Follow the steps in order to finalise your purchase. A standard **.com** should cost you around 12 Euros per year.

3- Under your newly created domain, click on **DNS** from the sidebar and add a new **Custom Records** with the following configurations:

**Custom Record 1**

   {% highlight ruby %} 
   {% raw %}   
   Host Name: www (it will be autocompleted with yourdomainname.com) 
   Type: CNAME
   TTL: 3600 (Default)
   Data:  <username>.github.io
   {% endraw %}   
   {% endhighlight %}

**Custom Record 2**

   {% highlight ruby %} 
   {% raw %}   
   Host Name: leave this empty, it will default to yourdomainname 
   Type: A
   TTL: 3600 (Default)
   Data: 
    185.199.110.153
    185.199.111.153
    185.199.109.153
    185.199.108.153
   {% endraw %}   
   {% endhighlight %}

4- On GitHub, navigate to your site's repository and go to Settings 

5- Click on Pages from the sidebar, add your custom domain `www.yourdomainname.com` and click save. 

6- Add **CNAME** file to your master branch. By default when you add a custom domain, github adds the CNAME file to your *gh-pages* branch, which gets overwritten by the build from your master branch each time you push new changes.


With this we have reached the end of this post, I hope you enjoyed it! 

If you have any remarks or questions, please don't hesitate and do drop a comment below. 

*Stay tuned!*

## Recap ## 

In this article we discussed the building blocks for our Jekyll blog and how to host it. With this we have only touched the tip of the iceberg. Working on your blog will be a continuous process involving experimentation and trial of new features all in the purpose of reaching more people to share your thoughts and learnings. 
I hope this will get you started on a good foot and if you have any suggestions or an interesting feature and you would like to share it, feel free to reach out. 

*Happy learning!*

## Resources ##

[https://jekyllrb.com/docs/](https://jekyllrb.com/docs/)

[https://github.com/jekyll/minima](https://github.com/jekyll/minima)

[https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll)
