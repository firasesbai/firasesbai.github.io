---
layout: page
permalink: /categories/data-engineering
description: "Explore articles and insights on data engineering, covering key topics and resources to expand your knowledge and interests."
---

{% assign category = "Data Engineering" %}

{% for tag in site.tags %}
{% if tag[0] == category %}
  <h1>{{ tag[0] }}</h1>
  <ul>
    {% for post in tag[1] %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
{% endif %}
{% endfor %}