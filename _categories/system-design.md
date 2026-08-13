---
layout: page
permalink: /categories/system-design
description: "Explore articles and notes about system design, architecture tradeoffs, and interview frameworks."
---

{% assign category = "System Design" %}

{% for tag in site.tags %}
{% if tag[0] == category %}
  <h1 class="index-title">{{ tag[0] }}</h1>
  <p class="index-subtitle">Articles related to {{ tag[0] | downcase }}.</p>
  <ul class="archive-post-list">
    {% for post in tag[1] %}
      <li class="archive-post">
        <a href="{{ post.url }}">{{ post.title }}</a>
        <span class="post-date">{{ post.date | date: "%b %-d, %Y" }}</span>
      </li>
    {% endfor %}
  </ul>
{% endif %}
{% endfor %}
