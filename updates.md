---
layout: default
title: Updates
permalink: /updates/
---

<h1>Updates</h1>

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
