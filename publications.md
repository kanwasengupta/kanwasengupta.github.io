---
layout: default
title: Publications
permalink: /publications/
---

<h1>Publications</h1>

{% assign pub_entries = site.publications | where: "category", "Publications" | sort: "date" | reverse %}
{% assign conf_entries = site.publications | where: "category", "Conference Abstracts" | sort: "date" | reverse %}

<h2>Publications</h2>
<ul>
  {% for pub in pub_entries %}
    <li>
      <strong><a href="{{ pub.url }}">{{ pub.title }}</a></strong><br>
      <small>{{ pub.authors }} - {{ pub.journal }} ({{ pub.date | date: "%Y" }})</small><br>
      <a href="{{ pub.link }}" target="_blank">Read More</a>
    </li>
  {% endfor %}
</ul>

<h2>Conference Abstracts</h2>
<ul>
  {% for conf in conf_entries %}
    <li>
      <strong><a href="{{ conf.url }}">{{ conf.title }}</a></strong><br>
      <small>{{ conf.authors }} - {{ conf.conference }} ({{ conf.date | date: "%Y" }})</small><br>
      <a href="{{ conf.link }}" target="_blank">Read More</a>
    </li>
  {% endfor %}
</ul>