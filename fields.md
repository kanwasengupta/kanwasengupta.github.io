---
layout: default
title: "Blog and Updates"
---

{% if site.show_excerpts %}
  {% include home.html %}
{% else %}
  {% include archive.html title="field" %}
{% endif %}
