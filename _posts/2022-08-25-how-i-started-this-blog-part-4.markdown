---
layout: post
title:  "How I Started This Blog Part 4"
date:   2022-08-25
category: articles
tags: ["Blogging"]
author: Firas Esbai
description: "In this article we will integrate a search bar, add pages and customize our blog with a new domain"
comments: true
---

*In this article we will wrap up the How I Started This Blog series by adding some features that will make your site more discoverable and easier to navigate.* 

In case you missed the first parts, you can find them here: [Part 1], [Part 2] and [Part 3].   

*So let's get started!* 

{% include table-of-content.html %}

## Search ##

As the number of articles increases over time in your blog, it will be difficult to navigate and find a certain article that you are looking for. In this case, having search functionality becomes necessary. 

There are multiple ways to achieve this such as using Google Custom Search Engine or other paid services. Easiest solution though would be to use the [Simple Jekyll Instant Search].

### Set up ###

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

3- Create a new `search-script.js` under `/js/` folder in your root directory. You can find an example of it [here].  

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

![image](/assets/images/articles/8_search_bar.png)
<br /> *Figure 1: Search Bar* 

## Pagination ##

For the same reasons mentioned above, having a pagination system in place will make navigating your rich blog easier rather than making your readers scroll down endlessly.

### Set up ###

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

![image](/assets/images/articles/8_navigation_buttons.png)
<br />*Figure 2: Navigation Buttons*

## Managing a custom domain for your Site ##

We have mentioned in the first [blog post] of the series that we have opted for **GitHub Pages** as our free static site hosting service. 
Using this will serve your site under `https://<username>.github.io` where `username` is your GitHub user account. 

That worked out of the box for us and was a good starting point. Now that we have a fully functional website armed with all the features that we need, it is time to customise that URL by using a custom domain. 
This has multiple benefits namely better promoting our own brand, providing trust to our readers and making the site more discoverable. 

### Set up ###

1- Head over to [Google Domains] and search for a new domain

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

That's it! You should now be able to access your blog at the new URL `www.yourdomainname.com`

With this we have reached the end of this post, I hope you enjoyed it! 

If you have any remarks or questions, please don't hesitate and do drop a comment below. 

*Stay tuned!*

## Recap ## 

Through these blog posts we have only touched the tip of the iceberg. Working on your blog will be a continuous process involving experimentation and trial of new features all in the purpose of reaching more people to share your thoughts and learnings. 
I hope this will get you started on a good foot and if you have any suggestions or an interesting feature and you would like to share it, feel free to reach out. 

*Happy learning!*

## Resources ##

[https://blog.webjeda.com/instant-jekyll-search/]

[https://jekyllrb.com/docs/pagination/]

[https://github.com/sverrirs/jekyll-paginate-v2]

[https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site]

[Part 1]: https://firasesbai.github.io/articles/2021/10/07/how-i-started-this-blog.html
[Part 2]: https://firasesbai.github.io/articles/2022/03/23/how-i-started-this-blog-part-2.html 
[Part 3]: https://www.firasesbai.com/articles/2022/03/27/how-i-started-this-blog-part-3.html
[Simple Jekyll Instant Search]: https://github.com/christian-fei/Simple-Jekyll-Search 
[here]: https://github.com/firasesbai/firasesbai.github.io/blob/master/js/search-script.js
[blog post]: https://firasesbai.github.io/articles/2021/10/07/how-i-started-this-blog.html
[Google Domains]: https://domains.google/

[https://blog.webjeda.com/instant-jekyll-search/]: https://blog.webjeda.com/instant-jekyll-search/
[https://jekyllrb.com/docs/pagination/]: https://jekyllrb.com/docs/pagination/
[https://github.com/sverrirs/jekyll-paginate-v2]: https://github.com/sverrirs/jekyll-paginate-v2
[https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site]: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
