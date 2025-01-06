---
layout: page
permalink: /categories/general
description: "Explore articles and general notes from books or other interesting resources covering their key topics."
---

{% assign category = "General" %}

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