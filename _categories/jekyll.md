---
layout: page
permalink: /categories/jekyll
---

{% assign category = "Jekyll" %}

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