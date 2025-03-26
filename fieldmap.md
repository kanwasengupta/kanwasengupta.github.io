---
layout: default
title: Interactive Map
permalink: /map/
---

<h1>Interactive Map with Updates</h1>
<div id="map" style="height: 500px;"></div>

<!-- Load Leaflet -->
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />
<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>

<script>
  // Initialize the map
  var map = L.map('map').setView([20, 0], 2);  // Centered at an approximate midpoint

  // Add OpenStreetMap tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Function to generate random colors
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Markers array from Jekyll
  var locations = [
    {% for post in site.updates %}
      { 
        lat: {{ post.latitude }}, 
        lng: {{ post.longitude }}, 
        title: "{{ post.title }}", 
        url: "{{ post.url }}"
      }{% unless forloop.last %},{% endunless %}
    {% endfor %}
  ];

  // Add markers
  locations.forEach(function(post) {
    var marker = L.marker([post.lat, post.lng]).addTo(map);
    marker.bindPopup("<a href='" + post.url + "'>" + post.title + "</a>");
  });
</script>
