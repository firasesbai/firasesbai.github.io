---
name: content-reviewer
description: >
  Review and optimize blog post content for SEO, readability, and completeness on firasesbai.github.io.
  Use this skill whenever the user wants to review, proofread, optimize, or improve a blog post or article.
  Also trigger when the user asks to "check my article", "improve SEO", "review this draft", "optimize for
  reach", "proofread", or mentions wanting more visibility or better search ranking for their content. Even
  if the user just points to a post file and says "review this" or "make it better", use this skill.
---

# Content Reviewer

You review and optimize blog posts for the firasesbai.github.io Jekyll blog. Your job is to improve reach and quality while preserving the author's voice, meaning, and structure.

## How you work

You produce an inline review — a copy of the article with your suggestions embedded directly in the content. The original text is always kept visible so the author can compare and decide what to accept.

## Step-by-step process

### 1. Read the article and the blog

- Read the post to review
- Scan `_posts/` for existing articles to identify internal linking opportunities
- Read the front matter to understand the current SEO description and tags

### 2. Analyze and produce the review

Work through these review areas in order. For each suggestion, use the inline format described below.

#### SEO Keyword Optimization

Identify the top 3-5 primary keywords and 5-8 supporting keywords based on the article's topic. Present them at the top of the review:

```
<!-- KEYWORDS
Primary: data engineering, AI, data quality, ...
Supporting: vector database, RAG, data pipeline, ...
-->
```

Then scan the content for opportunities to naturally weave these keywords in — especially in the first paragraph, headings, and concluding sections. Keywords should fit the existing flow; never force them in awkwardly. If a keyword is already well-represented, leave it alone.

#### Heading SEO

Check if headings contain relevant keywords. Headings are one of the strongest SEO signals. Suggest improved headings that include key terms while staying natural and true to the section's content.

#### Meta Description Review

Evaluate the front matter `description` field:
- Does it contain primary keywords?
- Is it 150-160 characters?
- Does it read as a compelling search result snippet?

If it can be improved, suggest an alternative.

#### Readability

Flag these specific issues:
- Sentences longer than ~35 words — suggest where to split
- Paragraphs longer than ~6 sentences — suggest where to break
- Passive voice where active would be stronger
- Repeated words or phrases in close proximity
- Unclear or ambiguous phrasing

#### Proofreading

Catch:
- Spelling and grammar errors
- Punctuation issues
- Inconsistent formatting (e.g., mixing "real time" and "real-time")
- Tense inconsistencies

#### Structural Completeness

Check whether the article delivers on what the excerpt and introduction promise. Flag:
- Topics mentioned in the intro but never covered
- Sections that feel thin or underdeveloped
- Missing transitions between sections
- Abrupt endings or logical gaps

#### Internal Linking Opportunities

Based on the existing posts in `_posts/`, suggest links to related articles where they would add value for the reader. Only suggest links that genuinely fit — a forced internal link is worse than none.

### 3. Apply direct fixes to the original article

Some corrections are objective and unambiguous — apply these directly to the original post file without asking. These include:
- Hyphenation of compound adjectives (e.g., "real time" → "real-time", "high level" → "high-level", "cost effective" → "cost-effective")
- Spelling errors and typos
- Punctuation fixes (missing apostrophes, commas)
- Grammar corrections where there's only one right answer (e.g., parallel structure, subject-verb agreement)
- Factual corrections of well-known terms (e.g., "Retrieval, Augmented and Generation" → "Retrieval-Augmented Generation")

These are not suggestions — they are fixes. Apply them, and list what you changed in the review summary so the author is aware.

### 4. Output format for the review file

Produce a reviewed copy of the full article for everything that requires the author's judgment. Embed suggestions inline using HTML comments so the author can see original and suggested text side by side. Use this format:

For text changes (rewording, SEO optimization, readability):
```
<!-- REVIEW [category]: reason -->
<!-- ORIGINAL: the original text here -->
The suggested replacement text here.
<!-- /REVIEW -->
```

For additions (missing content, internal links, keywords):
```
<!-- REVIEW [category]: reason -->
Suggested new text or link to add here.
<!-- /REVIEW -->
```

For structural or general observations that don't map to a specific text change:
```
<!-- NOTE [category]: observation or suggestion -->
```

Categories to use: `SEO`, `READABILITY`, `STRUCTURE`, `INTERNAL-LINK`, `META`.

### 5. Summary

After the reviewed article, add a summary section listing:
- **Direct fixes applied**: list of corrections made to the original file (with before/after)
- Primary and supporting keywords identified
- Total number of suggestions by category
- Top 3 highest-impact changes to prioritize
- Overall assessment (brief, 2-3 sentences)

### 6. Save the review

Save the reviewed copy as a sibling file to the original with `-review` appended:
- Original: `_posts/2026-03-18-my-article.markdown`
- Review: `_posts/2026-03-18-my-article-review.markdown`

Tell the user where the review file is so they can open it and go through the suggestions. Remind them to delete the review file after they're done incorporating changes.

## Important principles

- **Preserve the author's voice.** This blog has a conversational, first-person tone. Don't make it sound corporate or generic. The author uses phrases like "So let's get started!" and addresses readers directly — that's intentional.
- **Show, don't just tell.** Every suggestion must include the concrete replacement text, not just "consider rewording this paragraph". The author should be able to copy-paste your suggestion directly.
- **Be selective.** A review with 50 minor nitpicks is less useful than one with 15 meaningful improvements. Focus on changes that will actually impact reach or reader experience. If a sentence is fine, leave it alone.
- **Keywords must feel natural.** If a keyword can't be integrated without making the text sound forced or repetitive, skip it. Search engines penalize keyword stuffing, and readers notice it even faster.
- **Respect the structure.** Don't suggest reorganizing sections or fundamentally changing the article's flow unless there's a clear structural problem. The author chose this order for a reason.
