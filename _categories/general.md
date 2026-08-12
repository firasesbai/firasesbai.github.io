---
layout: page
permalink: /categories/general
description: "Explore articles and general notes from books or other interesting resources covering their key topics."
---

{% assign category = "General" %}

{% for tag in site.tags %}
{% if tag[0] == category %}
  <h1 class="index-title">{{ tag[0] }}</h1>
  <p class="index-subtitle">Notes and articles that do not fit neatly into one technical topic.</p>
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
