---
name: obsidian-to-jekyll
description: >
  Convert Obsidian markdown drafts into properly formatted Jekyll blog posts for firasesbai.github.io.
  Use this skill whenever the user wants to publish a new blog post, convert a draft, format an article
  for their Jekyll site, or mentions importing/moving content from Obsidian to Jekyll. Also trigger when
  the user provides a markdown draft and asks to "format it", "prepare it for the blog", or "make it ready
  to publish". Even if the user just pastes raw markdown content and says something like "new post" or
  "add this to the blog", use this skill.
---

# Obsidian to Jekyll Formatter

You convert Obsidian markdown drafts into Jekyll-ready blog posts that match the conventions of the firasesbai.github.io blog. The blog is built with Jekyll and hosted on GitHub Pages.

## What you do

1. Read the user's Obsidian draft
2. Read the blog template at `_drafts/template.markdown` and a recent post for reference
3. Generate a properly formatted Jekyll post with front matter, converted syntax, and boilerplate sections

## Step-by-step process

### 1. Understand the draft

Read the user's draft content. Identify:
- The topic and main subject (needed for title, description, tags)
- The first sentence (this becomes the excerpt)
- Any headings, tables, code blocks, or image placeholders
- Any links or references

### 2. Generate the front matter

Build the YAML front matter using these fields:

```yaml
---
layout: post
title:  "<title>"
date:   YYYY-MM-DD
category: articles
tags: ["<tag>"]
author: Firas Esbai
description: "<SEO description>"
comments: true
image:
pinned:
---
```

Field rules:
- **title**: Derive from the draft's main heading or topic. Use title case. Wrap in double quotes.
- **date**: Use today's date in `YYYY-MM-DD` format.
- **category**: Almost always `articles`. Use `notes` only if the content is clearly a short note rather than a full article.
- **tags**: Pick from the existing tag list (see reference below). Use the most specific matching tag. Format as `["Tag Name"]`.
- **description**: Write an SEO-optimized summary, 150-160 characters. It should capture the article's value proposition and include relevant keywords. Wrap in double quotes.
- **comments**: Set to `true`.
- **image**: Leave empty (the user adds images manually later).
- **pinned**: Leave empty.

### 3. Format the body

#### Excerpt
The very first line after the front matter is the excerpt, wrapped in `*italics*`. It serves as the hook that appears in post listings and previews, so it needs to be compelling.

- **If the draft has a clear opening sentence**, adapt it into first person. Pattern: `*In this article, I...*` or similar.
- **If there's no obvious first sentence to use** (e.g., the draft jumps straight into technical content, or starts with a heading), generate an original excerpt from the article's content. It should spark curiosity and give readers a reason to keep reading — highlight what they'll learn, what problem gets solved, or what insight they'll walk away with. Keep it to 1-2 sentences.

#### Opening
After the excerpt, include the opening boilerplate:

```
*So let's get started!*

{% include table-of-content.html %}
```

If the draft mentions source code with a repository link, include the optional line before "So let's get started!":
```
All the source code is available [here](<url>)
```

#### Headings
Convert headings to Jekyll style with trailing `##`:
- `## Heading` becomes `## Heading ##`
- Obsidian headings work the same way, just add the trailing hashes

#### Tables
Keep markdown tables as-is. If a table has a caption or description nearby, format it as:
```
| col 1 | col 2 |
| ------|:------|
| row 1 | row 1 |

<p style="text-align:center;">Table N: description</p>
```

#### Code blocks
Convert fenced code blocks to Jekyll highlight syntax:
````
```python
code here
```
````
becomes:
```
{% highlight python %}
{% raw %}
code here
{% endraw %}
{% endhighlight %}
```

If the draft uses inline code (backticks), keep them as-is.

#### Image placeholders
The user puts placeholders like "image for X" or "screenshot of Y" in their drafts. Convert these into the Jekyll image include format as a reminder template:
```
{% include image.html
   src="/assets/images/articles/XX_your_image_name.png"
   alt="<descriptive alt text based on placeholder>"
   caption='Figure N: <description>'
%}
```
Keep `XX` as the prefix since the user assigns the number manually.

#### Links
Standard markdown links `[text](url)` stay as-is. They work in both Obsidian and Jekyll.

#### Closing boilerplate
After the last content section, always append:

```
With this we have reached the end of this post, I hope you enjoyed it!

If you have any remarks or questions, please don't hesitate and do drop a comment below.

*Stay tuned!*
```

Note: Some posts use `*Stay tuned!*` while others go straight to Recap. Use `*Stay tuned!*` as default, but if the article has a natural recap/summary, use:

```
## Recap ##

*Happy learning!*
```

#### Resources section
Always end with a Resources section containing any links/references from the draft:

```
## Resources ##

[Link text](https://url)
```

If the draft has no external references, still include the section header with a placeholder.

### 4. Output

Save the formatted post to `_posts/` with the filename pattern:
```
YYYY-MM-DD-slugified-title.markdown
```

The slug should be lowercase, hyphen-separated, derived from the title. Drop filler words like "a", "the", "and" if they make the slug too long.

Present the complete formatted post to the user for review before saving.

## Available tags

These are the existing tag categories on the blog. Always pick from this list:
- Data Engineering
- Cloud Computing
- Observability
- Data Architecture
- AI Engineering
- Blogging
- General

If the draft topic doesn't clearly fit any of these, use "General".
