---
layout: page
permalink: /categories/general
---

{% assign category = "General" %}

{% for tag in site.tags %}
{% if tag[0] == category %}
  <h3>{{ tag[0] }}</h3>
  <ul>
    {% for post in tag[1] %}
      <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
{% endif %}
{% endfor %}