---
layout: post
title:  "How I Started This Blog Part 3"
date:   2022-03-27
issue_id: 9
category: articles
tags: ["Jekyll"]
author: Firas Esbai
description: "In this article we will integrate a comments section using Github comments API and add an estimated reading time to our articles"
---

*In this article we continue adding some interesting key features to a Jekyll Blog.* 

![image](/assets/images/articles/7_how_i_started_this_blog_part_3.png)

Continuing with the *How I Started This Blog* series and in this third part we will go through some fundamental features in order to make your blog stand out.

In case you missed the first parts, you can find them here: [Part 1] and [Part 2]. 

*So let's get started!* 

{% include table-of-content.html %}

## Articles Reading Time ##

Adding an estimated reading time at the beginning of your articles improves your engagement with the readers, especially the ones with time-limited schedules and which will probably refrain or bounce from it if they think that the article is too long. 

### How to estimate reading time? ###

Words Per Minute (WPM) is a measure of words processed per minute. According to this [Wikipedia] article the average person reading speed of English is at 200 wpm on paper and 180 on a monitor. 

### Set up ###

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

## Comments ##

Another feature that directly impacts the engagement with your readers is having a comments section. 

Usually people tend to use third party services, like [Disqus], when it comes to adding comments for static sites. 
We on the other hand will be seeing how to leverage Github's API for commenting and integrate it by displaying Github issues comments on a static blog post.  

This might not be an ideal solution for everyone since it requires the person commenting to be logged in to Github. 
In my case, using this approach made sense since most of my articles are rather technical and would involve some code snippets or references to a Github repository. 
Besides, as we have already covered it in the first part of the series, the blog itself is hosted on Github using the free Github Pages hosting service. 

At the end we are only presenting one of many options and it is up to you to choose the best one for you depending on your requirements and needs.  

### Set up ###

1. We start by adding the `issues_repository` variable in the `_config.yml` configuration file which will point to the Github repository where the comments will be added. 

2. For every post where you want to include a comments section add in the [Front Matter] section a predefined variable called `issue_id` which points to the issue number of the issue you created in the Github repository. 
  
3. Create a new `comments.html` file under the `_includes` folder. This is where the whole logic resides. Using the previously defined variables we fetch the existing comments using the Github API and load them. 
   You can find an example of this file [here].  

4. Finally in order to make the loaded comments appear on our pages, like the one we have at the bottom of this article you are currently reading, we need to add the following code snippet in the **post layout** page:
   {% highlight ruby %} 
   {% raw %}   
   {% if page.issue_id %}
	{% include comments.html issue_id=page.issue_id %}
   {% endif %}
   {% endraw %}   
   {% endhighlight %}

With this we have reached the end of this post, I hope you enjoyed it! 

If you have any remarks or questions, please don't hesitate and do drop a comment below. 

*Stay tuned!*

## Recap ## 

In this article we saw how to add an estimated reading time per article and a comments section for our blog posts in order to increase the engagement with the audience. 

*Happy learning!*

## Resources ##

[https://carlosbecker.com/posts/jekyll-reading-time-without-plugins/](https://carlosbecker.com/posts/jekyll-reading-time-without-plugins/)

[https://stackoverflow.com/questions/62457756/get-the-read-time-for-a-specific-post-in-jekyll-pages-from-home-page-any-other](https://stackoverflow.com/questions/62457756/get-the-read-time-for-a-specific-post-in-jekyll-pages-from-home-page-any-other)

[Part 1]: https://firasesbai.github.io/articles/2021/10/07/how-i-started-this-blog.html
[Part 2]: https://firasesbai.github.io/articles/2022/03/23/how-i-started-this-blog-part-2.html 
[Wikipedia]: https://en.wikipedia.org/wiki/Words_per_minute 
[Disqus]: https://disqus.com/ 
[Front Matter]: https://jekyllrb.com/docs/front-matter/ 
[here]: https://github.com/firasesbai/firasesbai.github.io/blob/master/_includes/comments.html