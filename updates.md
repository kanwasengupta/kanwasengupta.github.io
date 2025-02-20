---
layout: default
title: Field Trips
permalink: /updates/
---

<h1>Field Trips</h1>

{% for update in site.updates reversed %}
  <article>
    <h2><a href="{{ update.url }}">{{ update.title }}</a></h2>
    <p><small>{{ update.date | date: "%B %d, %Y" }}</small></p>
    <p>
      {{ update.excerpt }}
      <a href="{{ update.url }}">Read more...</a>
    </p>
    <hr>
  </article>
{% endfor %}
