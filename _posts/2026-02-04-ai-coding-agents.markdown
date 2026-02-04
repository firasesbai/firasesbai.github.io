---
layout: post
title:  "AI Coding Agents: A Practical Guide"
date:   2026-02-04
category: articles        
tags: ["AI Engineering"]                  
author: Firas Esbai
description: "Practicle guide on what are ai coding agents, best practices and features that extend their capabilities and how to leverage them using Cline"
comments: true
image: "/assets/images/articles/30_prompt_engineering_vs_context_engineering.png"
---

*In this article, I'll break down what makes an AI agent, explain why I've settled on Cline as my primary tool, and explore the techniques that extend an agent's capabilities.*

AI coding tools have moved beyond simple suggestions. Today's agents can read your codebase, execute commands, search the web, and complete multi-step tasks. As things are changing rapidly with new features and terminology appearing every week that each promises to revolutionize how we write code, I wanted to understand the bigger picture: What are the core building blocks that all these tools share? How do features interconnect? And most importantly, how can I use this knowledge to work more effectively?

This article maps out the anatomy of an AI coding agent, using Cline as the primary example while drawing connections to other tools in the ecosystem.

*So let’s get started!*

{% include table-of-content.html %}

## Foundation: What is an Agent? ##

GitHub copilot was initially released in June 2021. A collaboration between GitHub and OpenAI resulted in an AI powered tool with the premise to help developers code faster leveraging OpenAI's Codex model. The tool mainly offered what is now sometimes referred to as "autocomplete on steroids". However, things evolved rapidly and by 2024 the AI coding tools got more advanced especially with integrations into IDEs to reach what we are currently witnessing as the emergence of AI coding agents. But what is an AI agent?  

In order to understand what is an AI Agent and identify its foundational building blocks, we will first look at different definitions from AI research labs and technology companies. 

According to [OpenAI](https://developers.openai.com/tracks/building-agents/), an agent is *An AI system that has instructions (what it should do), guardrails (what it should not do), and access to tools (what it can do) to take action on the user’s behalf*. 

Google has a similar [definition](https://cloud.google.com/discover/what-are-ai-agents?hl=en) with an emphasis on the capabilities of the model:

*AI agents are software systems that use AI to pursue goals and complete tasks on behalf of users. They show reasoning, planning, and memory and have a level of autonomy to make decisions, learn, and adapt.*

Looking to [Anthropic's definition](https://www.anthropic.com/engineering/building-effective-agents), they have a more broad definition of an **agentic system** encompassing both:
- ***Workflows** that are systems where LLMs and tools are orchestrated through predefined code paths.*
- ***Agents**, on the other hand, are systems where LLMs dynamically direct their own processes and tool usage, maintaining control over how they accomplish tasks.*

To simplify things and have a set of building blocks that we can use later as foundations to build upon and extend, we can consider an agent to be composed of the following: 

{% mermaid %}
flowchart LR
    direction TB
    
    Input["Input"]
    
    subgraph Core["AI Agent"]
        direction LR
        I["Instructions"] --> M["Model"]
        M --> T["Tools"]
        T --> M
    end
    
    Output["Output"]
    
    Input --> Core
    Core --> Output
{% endmermaid %}

<p style="text-align:center;">Figure 1: AI Agent Building Blocks</p>

It is worth highlighting that the agent operates in a continuous loop: it observes the current state, reasons about what to do next, takes actions through tools and observes the results. This cycle continues until the task is completed or the user intervenes. 

With this understanding, let's see why I consider **Cline** as my go-to AI coding assistant and explore later best practices and features that extend its functionality. 

## Why Cline? ##

The landscape of AI coding tools is evolving rapidly. On one hand, the underlying models powering these tools keep getting better with a new model at the top of the leaderboard every other month. On the other hand, integrated systems such as Claude Code limit your flexibility to switch models or explore other features that might not be available there.  

Constantly switching and chasing the new kid on the block can be taxing. Of course this does not mean you shouldn't try them out, but you might end up using multiple tools and managing multiple subscriptions. In an attempt to reduce this overhead, I have found **[Cline](https://github.com/cline/cline)** **[- a free VSCode plugin](https://cline.bot/)** to be uniquely valuable. 

What stood out to me is Cline's philosophy; You get access to any model, you don't have to choose a particular tool and you get the latest proven features from the industry without suffering the tool fatigue. 

In the following sections, we will look into techniques and concepts that extend and improve the functionality of an agent and how they can be leveraged in Cline.  

## Context Layer: What the Agent Knows ##

### Context Engineering ###

Context is a collection of information an AI agent uses to understand the user's request. This is however a finite and limited resource because every AI model has a **context window** which is the maximum amount it can process, measured in tokens, in a single conversation. 

What started as crafting optimized effective prompts, known as prompt engineering, has evolved to finding the best strategy for managing the entire context and choosing what to include in the limited context window.    

<!-- With caption (for article images with sources) -->
{% include image.html 
   src="/assets/images/articles/30_prompt_engineering_vs_context_engineering.png" 
   alt="prompt engineering vs context engineering" 
   caption='Figure 2: Prompt engineering vs Context engineering - <a href="https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents">Image Source</a>' 
%}

Besides the model's system prompt, when you start a new task or conversation, the context window will include the user's query along with needed context, requirements, documentation and active files. As you interact more with model, the conversation history is also included. In addition, tools like Cline will include additional dynamic context needed to achieve the task at hand. For instance, Cline automatically discovers:
- project structure and file organization
- Import relationships and dependencies
- Code patterns and conventions
- Configuration files and settings
- Recent changes and git history (when using @git)

On complex projects and as the current conversation approaches the context window limit, a standard solution would be using summarization technique to compress context preserving important information and allows you to keep working. However, this is not ideal as you could still sacrifice important context. 

Though things like documentation of your project, architectural decisions and design patterns are not persisted across different sessions but still required to get more accurate and relevant responses. This is where the memory bank comes in.  

### Memory Bank ###

Depending on the tools you use, files like **CLAUDE.md** or **GEMINI.md**, are used to provide persistent guidelines and preferences across sessions. Automatically loaded into the context, they act as a long term memory for the agent. An attempt to standardize this across many agents, resulted in this simple open format: [AGENTS.md](https://agents.md/#examples) 

Cline's memory bank on the other hand, is not a specific feature but rather a methodology that takes this into a structured documentation that allows to maintain knowledge across sessions. It is simply a group of markdown files stored in your repository that goes beyond a single README.md file. 


## Instructions Layer: How the Agent Behaves ##

### Custom Instructions ###

Setting custom instructions help the AI generate code that is more aligned with your specific conventions, frameworks and use cases. These project specific customizations lead to:
- Consistency across team members when receiving suggestions that adhere to the same coding standards and practices. 
- More accurate and relevant suggestions knowing your tech stack, frameworks and tools. 
- Reduce the time spent on refining AI-generated code 

For Cline these custom instructions can be defined through **Rules**. 

Rules are loaded when Cline starts a new task and are checked in the following order:
1. `.clinerules/` folder (all `.md` files inside)
2. Single `.clinerules` file
3. `AGENTS.md` file

This highlights that workspace rules override global rules when both define the same guidance. 

Rules provide consistent guidance for every interaction, but some tasks require more than general guidelines and would need step-by-step procedures. In addition, they are not necessarily invoked with every request. This is what skills are designed for.

### Skills ###

Skills are folders of instructions that package repeated workflows, specialized knowledge, or new capabilities for your agent. It contains a **SKILL.md** file, along with instructions, scripts, assets and resources in the same folder that agents can discover to perform a specific task accurately. 

The **SKILL.md** file contains 2 sections: metadata and instructions. The latter contains detailed instructions to follow for that particular skill. The metadata provides necessary information when to use this skill through specific fields of which 2 are mandatory: name and description. 

Agent skills are now an open standard and has been adopted by a growing number of agent products. 

Unlike rules which are always active, skills load on demand. Installing multiple skills does not affect the context as only the metadata is always loaded and the instructions and other files are loaded progressively when the skill is triggered. 

Context and instructions shape what the agent knows and how it behaves, but an agent also needs the ability to read files, execute commands, and interact with external systems. This is the role of tools. 

## Tools Layer: What the Agent Can Do ##

### Tools ###

Tools define what your AI assistant can do. They let an agent observe, decide and act in order to achieve goals. 

Common built-in tools generally include tools to interact with the file system like listing directories, reading and writing files. They also include web tools for searching the web as well as shell tools to execute commands. 

In order to extend the capabilities of the agent beyond common operations, agents use MCP servers, covered in the next section, also through a dedicated internal tool.

### MCP ###

Model Context Protocol is an open-source standard for connecting AI applications to external systems. These systems include data sources such as local files and databases or tools like search engines. Through this standardization we reduce development time and complexity when integrating external systems and enhance the capabilities of our agents. 

Essentially MCP servers act as API that the models can use with predefined set of tools or functions that can be executed through this interface. They offer modular integration where they can be easily added or removed without overhauling the entire system architecture.

With context management, persistent memory, custom instructions, skills, and extensible tools through MCP, we now have a complete picture of how modern AI coding agents work.

With this we have reached the end of this post, I hope you enjoyed it!

If you have any remarks or questions, please don’t hesitate and do drop a comment below.

*Stay tuned!* 

## Recap ##

We have covered a lot of ground: from the basic agent building blocks to advanced features like context engineering, memory banks, MCP and Skills. 

This article is a snapshot of the current landscape focusing on foundational concepts and the challenges they address. The ecosystem is evolving rapidly, and there's much we haven't covered: sub-agents for delegating tasks, hooks for event-driven automation, workflows for chaining operations, and other patterns still taking shape.

The tools will keep changing and the models will keep improving but the challenges that led to these patterns and concepts like context engineering, persisting knowledge and extending capabilities will enable you to use tools interchangeably as the landscape evolves.

*Happy learning!*

## Resources ##

[https://cline.bot/blog/the-last-ai-coding-agent-youll-need](https://cline.bot/blog/the-last-ai-coding-agent-youll-need)  

[https://newsletter.pragmaticengineer.com/p/two-years-of-using-ai](https://newsletter.pragmaticengineer.com/p/two-years-of-using-ai) 

[https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents)

[https://docs.cline.bot/prompting/understanding-context-management](https://docs.cline.bot/prompting/understanding-context-management)

[https://cline.bot/blog/memory-bank-how-to-make-cline-an-ai-agent-that-never-forgets](https://cline.bot/blog/memory-bank-how-to-make-cline-an-ai-agent-that-never-forgets) 

[https://claude.com/blog/skills-explained](https://claude.com/blog/skills-explained) 

[https://agentskills.io/home](https://agentskills.io/home)

[https://modelcontextprotocol.io/docs/getting-started/intro](https://modelcontextprotocol.io/docs/getting-started/intro)
