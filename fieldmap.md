---
layout: default
title: Interactive Map
permalink: /map/
---

<h1>Interactive Map with Updates</h1>
<div id="map" style="height: 500px;"></div>

<script>
  // Initialize the map
  var map = L.map('map').setView([51.505, -0.09], 13);  // Default to a location, you can adjust this

  // Tile layer (you can customize the map style here)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Loop through posts in the _updates collection and add pins
  {% for post in site.updates %}
    var marker = L.marker([{{ post.latitude }}, {{ post.longitude }}]).addTo(map);
    marker.bindPopup("<a href='{{ post.url }}'>{{ post.title }}</a>");
  {% endfor %}
</script>
