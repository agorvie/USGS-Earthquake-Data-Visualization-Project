# USGS Earthquake Data Visualization Project
## Background
The United States Geological Survey (USGS) plays a crucial role in providing scientific data related to natural hazards, ecosystem health, environmental changes, climate impacts, and land-use effects. As part of their mission, USGS collects vast amounts of earthquake data from around the world on a daily basis. However, they lack a comprehensive visualization tool to effectively communicate and educate the public and government organizations about Earth's seismic activities. This project aims to address this gap by developing an interactive earthquake data visualization using Leaflet, enabling the USGS to better inform and engage various stakeholders.

## Project Overview
This repository, named leaflet-challenge, contains a comprehensive earthquake data visualization tool built using HTML, JavaScript, and the Leaflet library. The project is divided into two parts: Part 1 focuses on creating the Earthquake Visualization, while Part 2 (optional) involves gathering and plotting additional data to illustrate the relationship between tectonic plates and seismic activity.

## Part 1: Earthquake Visualization
### Dataset Selection and Import
The earthquake data is sourced from the USGS GeoJSON Feed, which provides up-to-date earthquake information. A specific dataset, such as "All Earthquakes from the Past 7 Days," is chosen for visualization. The JSON representation of this data is used to create the visualization.

### Creating the Visualization
Using the Leaflet library, a dynamic map is generated that plots earthquakes based on their longitude and latitude. The visualization includes the following features:

Data markers reflecting earthquake magnitude through size and depth through color.
Popups displaying additional information about each earthquake upon marker click.
A legend providing context for map data, helping users interpret earthquake magnitudes and depths.

## Part 2: Tectonic Plates and Additional Features
### Tectonic Plates Dataset
As an optional extension, tectonic plate data from the fraxen/tectonicplates GitHub repository is integrated into the visualization. This allows users to explore the relationship between tectonic plate boundaries and seismic activity.

### Enhanced Features
In this optional part, the following enhancements are implemented:

Addition of multiple base map options for users to choose from, providing various geographical perspectives.
Separate overlays for earthquake and tectonic plate datasets, enabling users to toggle visibility independently.
Layer controls allowing users to easily switch between base maps and dataset overlays.

### How to Use
To explore the earthquake data visualization:
Clone this repository to your local machine.
Navigate to the Leaflet-Part-1 directory to view the Earthquake Visualization.
Open the HTML file in a web browser to interact with the map.
Optionally, proceed to the Leaflet-Part-2 directory to experience enhanced features with tectonic plate data and layer controls.

### Conclusion
This project demonstrates a comprehensive earthquake data visualization tool developed for the USGS. By effectively presenting earthquake information through interactive maps, this tool enables the USGS to educate and engage the public, government agencies, and potential stakeholders. Additionally, the optional inclusion of tectonic plate data and enhanced features further enriches the user experience and provides deeper insights into the Earth's dynamic processes.
