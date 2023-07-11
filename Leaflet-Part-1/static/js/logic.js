// Create a Leaflet map centered at a specific location
let earthquakeMap = L.map('map').setView([0, 0], 2);

// Add a tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
  maxZoom: 18
}).addTo(earthquakeMap);

// Define the URL of the earthquake dataset
let queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Perform a GET request to the query URL
d3.json(queryUrl).then(function (data) {
  // Console log the data retrieved 
  console.log(data);
  // Once we get a response, send the data.features object to the createFeatures function.
  createFeatures(data.features);
});

// Function to create features and add them to the map
function createFeatures(earthquakeData) {
  // Define a function to set the style of each feature
  function style(feature) {
    return {
      opacity: 1,
      fillOpacity: 0.7,
      fillColor: getColor(feature.geometry.coordinates[2]),
      color: "#000",
      radius: getRadius(feature.properties.mag),
      stroke: true,
      weight: 0.5
    };
  }

  // Define a function to determine the color based on depth
  function getColor(depth) {
    switch (true) {
      case depth > 90:
        return "#FF0000"; // Red
      case depth > 70:
        return "#FF4500"; // OrangeRed
      case depth > 50:
        return "#FF8C00"; // DarkOrange
      case depth > 30:
        return "#FFA500"; // Orange
      case depth > 10:
        return "#FFD700"; // Gold
      default:
        return "#FFFF00"; // Yellow
    }
  }

  // Define a function to determine the radius based on magnitude
  function getRadius(magnitude) {
    if (magnitude === 0) {
      return 1;
    }
    return magnitude * 2;
  }


   // Create a GeoJSON layer containing the features array
  L.geoJSON(earthquakeData, {
    pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng);
    },
    style: style,
    onEachFeature: function (feature, layer) {
      layer.bindPopup(
        "Magnitude: " +
          feature.properties.mag +
          "<br>Depth: " +
          feature.geometry.coordinates[2] +
          "<br>Location: " +
          feature.properties.place
      );
    }
  }).addTo(earthquakeMap);
    
  // Create a legend
    let legend = L.control({
    position: "bottomright"
  });

  legend.onAdd = function () {
    let div = L.DomUtil.create("div", "info legend");
    div.innerHTML += "<h4>Earthquake Depth Legend</h4>";
    let depths = [-10, 10, 30, 50, 70, 90];
    let colors = [
      "#98ee00",
      "#d4ee00",
      "#eecc00",
      "#ee9c00",
      "#ea822c",
      "#ea2c2c"];

    for (let i = 0; i < depths.length; i++) {
      div.innerHTML += "<i style='background: "
        + colors[i]
        + "'></i> "
        + depths[i]
        + (depths[i + 1] ? "&ndash;" + depths[i + 1] + "<br>" : "+");
    }
    return div;
  };

  // Add legend to the map.
  legend.addTo(earthquakeMap);
 };