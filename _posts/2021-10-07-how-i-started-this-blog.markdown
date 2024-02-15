---
layout: post
title:  "How I Started This Blog"
date:   2021-10-07
category: articles
tags: ["Blogging"]
author: Firas Esbai
description: "detailed steps to create a blog using jekyll a static site generator and host it in github pages"
comments: true
---

*In this article we will see how to easily setup and publish your first blog.* 

![image](/assets/images/articles/4_how_i_started_this_blog.png)
<br /> *Figure 1: What is Jekyll, Image from [Geeksforgeeks]*

In a previous [post], I mentioned five reasons that were behind the existance of this blog. Now, it is time to walk you through the journey of actually creating it.

Through a series of posts we will setup a blog using **Jekyll** and enrich it with features to help you reach out and engage with your audience.  

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

For a detailed installation according to your operating system, check the following [link].

Using Gemfile and Bundler is optional but highly recommended as it ensures you’re running the same version of Jekyll and its plugins across different environments.

### Jekyll Themes ###

A good starting point for your blog should probably be Jekyll Themes. 
Jekyll has a large community where you can find community-maintained templates and styles that you can use out of the box to customize your blog. 

Running the following command will create a new Jekyll site powered by the **Minima** theme which is the one I'm actually using for this blog: 
{% highlight ruby %} jekyll new your-new-blog {% endhighlight %}

### Jekyll Structure ###

Understanding the structure of a Jekyll site is a crucial step to move your blog forward. 
You can find an explanation of the basic structure in the official [documentation]. 

For example, the `_posts` folder is where you would write your first blog post. 

Now, you can build your site by running the following command:

{% highlight ruby %} bundle exec jekyll serve {% endhighlight %}

Finally, browse to `http://localhost:4000` and see how your blog looks like. 

### GitHub Pages ###

GitHub Pages is a static site hosting service that takes files from a repository on GitHub, optionally runs the files through a build process, and publishes a website.

You can create your own static files or use a static site generator to build them for you. Sounds familiar right? Yes, it is Jekyll!
GitHub Pages will use Jekyll to build your site by default.

This is another advantage of having a jekyll-powered blog because you get a free and easy to set up hosting service with GitHub Pages. All you have to do is create a repository and name it like the following: 
`<username>.github.io` where username is your user account.

Whenever you commit new changes, GitHub Pages will build the static website and serve it for you.

Everything is being taken care of; sit back and enjoy your blog at `https://<username>.github.io` . 


With this we have reached the end of this post, I hope you enjoyed it! 

If you have any remarks or questions, please don't hesitate and do drop a comment below. 

*Stay tuned!*

## Recap ## 

In this article we discussed the building blocks for our Jekyll blog and how to host it.

*Happy learning!*

## Resources ##

[https://jekyllrb.com/docs/]

[https://github.com/jekyll/minima]

[https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll]

[Geeksforgeeks]: https://www.geeksforgeeks.org/jekyll-vs-wordpress/
[post]: https://firasesbai.github.io/articles/2021/04/12/why-i-started-this-blog.html
[link]: https://jekyllrb.com/docs/installation/ 
[documentation]: https://jekyllrb.com/docs/structure/
[https://jekyllrb.com/docs/]: https://jekyllrb.com/docs/
[https://github.com/jekyll/minima]: https://github.com/jekyll/minima
[https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll]: https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll 