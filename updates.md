---
layout: default
title: Updates
permalink: /updates/
---

<h1>Updates</h1>
<ul>
  {% for update in site.updates %}
    <li>
      <a href="{{ update.url }}">{{ update.title }}</a> - {{ update.date | date: "%B %d, %Y" }}
    </li>
  {% endfor %}
</ul>
