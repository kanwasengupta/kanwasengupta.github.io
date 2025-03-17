---
layout: default
title: Interactive Map
permalink: /map/
---

<h1>Interactive Map with Updates</h1>
<div id="map" style="height: 500px;"></div>

<script>
  // Initialize the map
  var map = L.map('map').setView([0, 0], 2);  // Set view to the center of the world with zoom level 2

  // Tile layer (you can customize the map style here)
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

  // Loop through posts in the _updates collection and add pins
  {% for post in site.updates %}
    var randomColor = getRandomColor();  // Generate a random color for the marker
    var icon = L.icon({
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',  // Default marker icon
      iconSize: [25, 41],  // Make the icon smaller
      iconAnchor: [12, 41], // Set anchor point at the bottom of the marker
      popupAnchor: [1, -34], // Position the popup correctly
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      shadowSize: [41, 41],
      iconColor: randomColor  // Apply the random color to the marker
    });

    var marker = L.marker([{{ post.latitude }}, {{ post.longitude }}], { icon: icon }).addTo(map);
    marker.bindPopup("<a href='{{ post.url }}'>{{ post.title }}</a>");
  {% endfor %}
</script>

