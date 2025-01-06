---
layout: post
title:  "Turning Your Jekyll Blog into a Progressive Web App (PWA) on GitHub Pages: A Step-by-Step Guide"
date:   2023-08-21
category: articles
tags: ["Blogging"]
author: Firas Esbai
description: "Required steps to transform a jekyll blog into a progressive web app and how to deploy it to github pages after exploring some theory behind it."
comments: true
---

*In this guide, we'll explore how to transform your Jekyll-based blog into a Progressive Web App, unlocking features such as offline access, fast loading, and a seamless user experience.*

Progressive Web Apps (PWAs) represent a significant advancement in web application development, offering users a seamless and engaging experience that combines the best aspects of both web and native mobile applications. 
By transforming your Jekyll-based blog into a PWA, you'll enhance user engagement, improve performance, and enable key features such as offline access. 

*So let’s get started!*

{% include table-of-content.html %}

## What are Progressive Web Apps? ##

Platform-specific apps are developed for a specific operating system (OS) and/or class of devices, like an iOS or Android device. They are usually installed on the user’s device using the vendor's app store. Websites on the other hand, can only be accessed by the user opening the browser and navigating to the site, and is highly dependent on network connectivity. 

So how does this relate to PWAs? 

Progressive web apps combine the best features of traditional websites and platform-specific apps. At their core, PWAs are web applications that take advantage of modern web technologies to deliver a reliable, fast, and immersive experience to users. Unlike traditional websites, PWAs can be installed on users' devices, giving them a direct pathway to your content, even without a traditional app store. PWAs can be accessed through web browsers, but they offer the responsiveness and fluidity that users typically expect from native mobile applications.

## Key Attributes of PWAs ##

1. **Offline Access**: One of the most significant advantages of PWAs is their ability to work offline or in low-network conditions. Users can still access content and navigate within the app, even when they're not connected to the internet. This offline capability ensures that your content remains accessible, enhancing user satisfaction.
2. **Fast Loading**: PWAs are designed to load quickly, providing an almost instant experience to users. This is achieved through techniques like efficient caching, optimized assets, and lazy loading of content. Fast loading times lead to lower bounce rates and higher user retention.
3. **Responsive Design**: PWAs are responsive by default, adapting to various screen sizes and orientations. This responsiveness ensures a consistent and visually appealing experience across devices, including smartphones, tablets, and desktops.
4. **Engagement and Retention**: PWAs can be "installed" on users' home screens or app drawers, creating a sense of ownership and encouraging repeated visits. This increased engagement can lead to higher retention rates, as users have easy access to your PWA.


## Successful PWA Examples ##

Numerous companies have embraced PWAs to enhance user experience and drive business growth. For example:

- **Pinterest**: Pinterest's PWA increased user engagement, with faster load times leading to a 60% increase in user engagement and a 44% increase in user-generated ad revenue.
- **Alibaba**: Alibaba.com's PWA achieved a 76% increase in conversions across browsers, with 14% more monthly active users on iOS and a 30% increase in mobile users.

For more details, check the links in the resources section. 

## Technical features of PWAs ##

Because PWAs are websites, they have the same basic features as any other website: at least one HTML page, which very probably loads some CSS and JavaScript. 

Beyond that, a PWA has some additional features:
- A **web app manifest file**, which, at a minimum, provides information that the browser needs to install the PWA, such as the app name and icon.
- A **service worker**, which, at a minimum, provides a basic offline experience.

Having this in mind, a blog is nothing more than static HTML, CSS, and Javascript files. This makes it a prime candidate for adding PWA features which is the focus of the rest of this blog post. 

We will be adding these features to a blog built using Jekyll, a free and open source static site generator, and hosted on Github Pages. For more in depth guides on how I started my journey building this blog, you can check my 4 Parts series starting from [here](https://www.firasesbai.com/articles/2021/10/07/how-i-started-this-blog.html). 

## Creating a Manifest File ##

The Web App Manifest is a JSON document that provides application metadata such as its name, icon, and other details, which browsers can use when adding the PWA to the home screen. 

If you have previously generated a favicon to your blog using [https://realfavicongenerator.net/](https://realfavicongenerator.net/) or similar, you should already have a `site.webmanifest` file that might be complete or miss a few properties. Otherwise, you can just use the following link [https://app-manifest.firebaseapp.com/](https://app-manifest.firebaseapp.com/) for reference or to generate its content. 

In either cases, the next step would be to add a reference to the manifest file under the `default.html` file in the head section as follow: 

   {% highlight ruby %}
   {% raw %}   
   <link rel="manifest" href="/assets/favicon/site.webmanifest">
   {% endraw %}
   {% endhighlight %}

The location of your manifest file might differ and you should update it accordingly. In my case, the manifest file is placed under assets along with the icons and favicon. 

## Implementing Service Workers ##

A service worker is a powerful web technology that acts as a scriptable network proxy between a web application (such as a website) and the browser. It runs in the background, separate from the main web page, and allows you to intercept and control network requests and responses, enabling advanced features like offline access, caching, and push notifications in web applications.

We will be using [Workbox](https://developer.chrome.com/docs/workbox/) which is a set of Javascript modules created by Google that simplifies and addresses a specific aspect of service worker development.  

1- Download and install the latest version of Node.js from the [official website](https://nodejs.org/), and npm will be installed automatically as part of the Node.js package.

2- Install Workbox CLI by running the following command:
  {% highlight ruby %}
  npm install -g workbox-cli 
  {% endhighlight %}

3- Use the Workbox Wizard to create a service worker by executing the following command inside the directory of your blog:
  {% highlight ruby %}
  workbox wizard 
  {% endhighlight %}

  The Workbox CLI wizard will guide you through setting up the service worker by choosing `_site` directory as the root of your app and selecting the type of files the service worker should pre-cache.
  
  At the end of this step, you should have a file named `workbox-config.js` created at the root of the project. 

4- Use the `workbox-confiog.js` file to generate the service worker by executing the following command:
  {% highlight ruby %}
  workbox generateSW workbox-config.js
  {% endhighlight %}

  A new file named `sw.js` inside the `_site` folder will be generated.

5- Create a new javascript file used to register your service worker. Place this file under `/js/service-worker.js` in your Jekyll project's root directory.
  
  The content of this file is the following:
  
  {% highlight ruby %}
    // Only trigger if service workers are supported in browser.
    if ('serviceWorker' in navigator) {
        // Wait until window is loaded before registering.
        window.addEventListener('load', () => {
        // Register the service worker with "/" as it's scope.
        navigator.serviceWorker.register('/sw.js', { scope: '/' })
            // Output success/failure of registration.
            .then(() => console.log('Service Worker registered with scope'))
            .catch(() => console.error('Service Worker registration failed'));
        });
    }
  {% endhighlight %}
 
  In order to register the service worker and enable its functionality, you'll need to include this code snippet to the `default.html` file, which is a layout file included in all your pages, as follow:

  {% highlight ruby %}
  {% raw %}   
    <script type="text/javascript" src="/js/service-worker.js"></script>
  {% endraw %}
  {% endhighlight %}

At this point if your development server is already running, you can navigate to `http://localhost:4000` and use developer tools to verify that:
1. By checking the Offline box under `Application -> Manifest -> Service worker` you can still access your site. 
2. Under `Application -> Cache Storage` new entry have been created

The newly created cache entry indicates that the predetermined assets in the workbox-config file are added to the cache during the service worker installation. This is called **precaching** and is commonly used to ensure that essential resources are available offline and to improve the initial loading performance of your application. 

For more details on some precaching considerations you can check this [article](https://developer.chrome.com/docs/workbox/precaching-dos-and-donts/).

Another type of caching is **runtime caching**. It  involves caching resources dynamically during the runtime of your web application, i.e., when users interact with the application. Unlike precaching, runtime caching allows you to define caching strategies for specific URLs or URL patterns based on different criteria such as network requests, HTTP methods, and more. 

There some common runtime caching strategies that are out of the scope of this blog post. For more details you can refer to the [workbox documentation](https://developer.chrome.com/docs/workbox/modules/workbox-strategies/). 

## Deploying Service Workers ##

Knowing that Jekyll regenerates the `_site` folder with each change you make to your files, the `sw.js` will be lost and we have to regenerate it each time. Since our site is hosted on Github Pages, we can leverage **Github Actions** to automate the execution of these commands as part of the pipeline building and deploying your site.

An example of a Github Actions workflow can be found [here](https://github.com/firasesbai/firasesbai.github.io/blob/master/.github/workflows/github-pages.yml).  

With this we have reached the end of this post, I hope you enjoyed it!

If you have any remarks or questions, please don’t hesitate and do drop a comment below.

*Stay tuned!* 

## Recap ##

Congratulations! You've successfully transformed your Jekyll blog into a powerful Progressive Web App. By implementing service workers and a manifest file, you've unlocked offline access and responsive design, making your content accessible to users even when they're offline. Remember, this is just the beginning and there's a wealth of additional features and optimizations you can explore to further enhance your PWA. 

*Happy learning!*

## Resources ##

[https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/What_is_a_progressive_web_app](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/What_is_a_progressive_web_app) 

[https://web.dev/what-are-pwas/](https://web.dev/what-are-pwas/) 

[https://medium.com/dev-channel/a-pinterest-progressive-web-app-performance-case-study-3bd6ed2e6154](https://medium.com/dev-channel/a-pinterest-progressive-web-app-performance-case-study-3bd6ed2e6154) 

[https://web.dev/alibaba/](https://web.dev/alibaba/) 

[https://fredrickb.com/2019/07/25/turning-jekyll-site-into-a-progressive-web-app/](https://fredrickb.com/2019/07/25/turning-jekyll-site-into-a-progressive-web-app/) 

[https://sevic.dev/caching-service-worker-workbox/](https://sevic.dev/caching-service-worker-workbox/) 