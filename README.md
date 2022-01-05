# leaflet-challenge

## Background

Welcome to the United States Geological Survey, or USGS for short. The USGS is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment; and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes. As a new hire, you will be helping them out with an exciting new project!

The USGS is interested in building a new set of tools that will allow them to visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. Their hope is that being able to visualize their data will allow them to better educate the public and other government organizations (and hopefully secure more funding) on issues facing our planet.

## Your Task

### Level 1: Basic Visualization


Your first task is to visualize an earthquake data set.

1. **Get your data set**
<img width="927" alt="Screen Shot 2022-01-05 at 3 43 38 PM" src="https://user-images.githubusercontent.com/89142142/148287453-eb7d1cf8-fda9-4a24-99e8-95ccf292d679.png">

   The USGS provides earthquake data in a number of different formats, updated every 5 minutes. Visit the [USGS GeoJSON Feed]() page and pick a data set to visualize. When you click on a data set, for example "All Earthquakes from the Past 7 Days", you will be given a JSON representation of that data. You will use the URL of this JSON to pull in the data for our visualization.


2. **Import & Visualize the Data**

   Create a map using Leaflet that plots all of the earthquakes from your data set based on their longitude and latitude.
   <img width="1277" alt="Screen Shot 2022-01-05 at 3 43 57 PM" src="https://user-images.githubusercontent.com/89142142/148287542-6dc237f8-4690-4952-b0bb-3ea543d718f1.png">
<img width="1271" alt="Screen Shot 2022-01-05 at 3 44 11 PM" src="https://user-images.githubusercontent.com/89142142/148287555-5eb33b29-e4ca-4d39-959a-5c7cfa2c77f2.png">


   * Your data markers should reflect the magnitude of the earthquake by their size and and depth of the earthquake by color. Earthquakes with higher magnitudes should appear larger and earthquakes with greater depth should appear darker in color.

   * Include popups that provide additional information about the earthquake when a marker is clicked.

   * Create a legend that will provide context for your map data.
   * <img width="120" alt="Screen Shot 2022-01-05 at 3 44 18 PM" src="https://user-images.githubusercontent.com/89142142/148287578-ccd16d28-2c93-456e-98e4-eada2416b94d.png">


   
