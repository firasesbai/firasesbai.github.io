---
layout: page
title: Archive
permalink: /archive.html
description: "Explore a comprehensive archive of Firas Esbai's articles. Browse by category or date to find the content you're looking for."
redirect_from: /archive/
---

### Archive ###

{% assign years_array = "2024, 2023, 2022, 2021" | split: ", " %}

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

<h1>Categories</h1>

{% assign categories_array = "Cloud Computing, Blogging, Data Architecture, Data Engineering, General, Observability" | split: ", " | sort %}

{% for category in categories_array %}
  {% assign post_url = category | downcase | replace: " ", "-" %}
  <ul><li><h4><a href="/categories/{{post_url}}">{{category}}</a></h4></li></ul>
{% endfor %}