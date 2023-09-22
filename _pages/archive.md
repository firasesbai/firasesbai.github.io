---
layout: page
title: Archive
permalink: /archive/
---

<h1>Archive</h1>

{% assign years_array = "2023, 2022, 2021" | split: ", " %}

{% for year in years_array %}
  <h4>{{year}}</h4>
  <ul>
  {% for post in site.posts %}
  {% assign post_year = post.date | date: "%Y" %}
    {% if post_year == year %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endif %}
  {% endfor %}
  </ul>
{% endfor %}