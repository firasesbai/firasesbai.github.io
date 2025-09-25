---
layout: post
title:  "Learnings from Vibe Coding"
date:   2025-09-25
modified_date: 
category: articles
tags: ["AI"]
author: Firas Esbai
description: "Lessons from trying out vibe coding using cursor"
comments: true
image: 
pinned:
---

*In this article, I share some lessons learned from trying out vibe coding.*

{% include table-of-content.html %}

## What is Vibe Coding? ##

Vibe coding is a term coined by Andrej Karpathy in his X post that was shared on February 2, 2025. However, the term has definitely evolved in my opinion since the original description. It is indeed a new kind of coding where the developer has become more like a moderator of multiple chat sessions and agents running in the background resulting in a handful of new and updated files with new generated code by the large language model that are waiting for his review. 

<figure>
  <img src="/assets/images/articles/25_vibe_coding_andrej_karpathy_post.png" alt="Andrej Karpathy X Post">
  <figcaption>Figure 1: Andrej Karpathy's Post - <a href="https://x.com/karpathy/status/1886192184808149383?lang=en">Image Source</a></figcaption>
</figure>


## Expectations ##

This is not gonna be one of those *I built a SaaS app in 15 minutes*. It is easy and at times surprisingly good how fast you can generate a landing page for an idea or have a decent CRUD app running but things get more complicated when building complex SaaS. 

<figure>
  <img src="/assets/images/articles/25_vibe_coding_leo_post.png" alt="Leo's posts about Vibe Coding">
  <figcaption>Figure 2: Leo's posts about Vibe Coding - <a href="https://x.com/leojr94_?lang=en">Image Source</a></figcaption>
</figure>

In my experiment, I wanted to answer a simple question: *can AI assisted development make me move faster through the backlog?* 

Obviously faster does not always mean better and the metric for measuring the outcome should not be the number of lines of code generated because if anything you won't be disappointed: LLMs can truly quickly generate a lot of code! 

As this was a personal side project, the stakes were not that high but the role of the moderator as mentioned earlier is still of huge importance. As you can see from the diagram below, I dealt with times where the model generated thousands of lines of code but almost always not all of it was accepted. You have to be a gatekeeper protecting your codebase from bugs or introducing weird behaviour and making sure to always follow clear design patterns and software development best practices. 

<figure>
  <img src="/assets/images/articles/25_total_line_changes.png" alt="total line changes from chat">
  <figcaption>Figure 3: Total Line Changes from Chat</figcaption>
</figure>

So over the course of two weeks, I used **Cursor** to try to answer my question. I did not start from scratch and vibe coded my way into this project but rather build on top of an existing web application and extended it with new features. That means I already had a clear code structure with clearly defined interfaces and domain models that have greatly influenced the LLM's code organization and structure.

When it comes to the features, some of them were straightforward but many weren't. These were a collection of cards with merely a title in a Trello board that came from ideas I thought were cool to implement someday so I just wrote them down there quickly to not lose track of them. This point is important as we'll see later because it influences how you approach building these features and how to draft your prompts for that. 

A final thing to mention before moving on to the key takeaways is the distribution of the used programming languages in the project:

<figure>
  <img src="/assets/images/articles/25_programming_language_usage.png" alt="programming language usage">
  <figcaption>Figure 4: Programming Language Usage</figcaption>
</figure>

I'm not a frontend developer and my Javascript skills at this point were a bit rusty to say the least but surprisingly this is the part where I made most of the progress that I couldn't have done without the AI assistance in such a short time. 

## Key Takeaways ##

Following are the observations and notes I took as I progressed in this experiment: 

- Use user journeys and expected behaviour in your prompt when explaining a feature especially one that would require changes across both frontend and backend logic.  
- Be specific and start with thin slices. Describing multiple features and expectations in the same prompt just because they are correlated will not result in better results but rather only confuse the model.  
- Request analysis of the code structure and design by giving the whole codebase as context to the mode. This helps you reflect on the progress made so far, assess the list of features implemented and decide what to do next because it is easy to have decision paralysis in this honeymoon phase where you are in love with how productive you are and everything seems feasible that you just want to do it all at once.  
- Asking the model to simplify any implementation is always good: rely on your judgment of assessing what looks good and what looks meh.  
- If the model gets stuck with a particular implementation or request, expect to have duplicated code snippets and functions with similar logic but slightly different names resulting from multiple attempts at solving the issue. This means that the model was really bad at cleaning up dead code unless you specifically ask it to evaluate some code by highlighting it. 
- After several interactions within the same chat, it is better to continue or start over in a new one: It helps you clear your thoughts with a fresh new prompt and therefore guide the model to better output. 
- I can't stress this enough but if you are not starting from scratch and you will be updating an existing codebase, have your unit tests ready as your defense mechanism. 
- From time to time, it is useful to start your prompt by specifically asking the model not to make code changes. Ask it to give you multiple implementation options and review the suggestions before proceeding with any of them. If needed drill down on the one you found most appealing with follow up questions and clarifications.  
- Commit changes frequently especially between requests when you are satisfied with the suggested changes. This way it is easier to review follow up code changes in particular those made to the same files.  
- Review the whole codebase once you have committed new changes to keep your understanding of it in check and be able to track down potential issues or improvements. 
- Some changes are really small and you can just make them in place using the tab functionality:  

<figure>
  <img src="/assets/images/articles/25_total_tabs_accepted.png" alt="total tabs accepted">
  <figcaption>Figure 5: Total Tabs Accepted</figcaption>
</figure>

With this we have reached the end of this post, I hope you enjoyed it!

If you have any remarks or questions, please don’t hesitate and do drop a comment below.

## Recap ##

Coming back to the original quest of this whole experiment: did AI supported me in doing things faster? for sure it did. Like any other tool when used properly and consciously it will help augment your abilities to do your work better and support you in many ways. Will programmers be replaced by AI? I'll take that with a pinch of salt. 
