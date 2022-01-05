// Make sure the page is responsive 
console.log("This page works!")

// Create map by choosing center and zoom 
var myMap= L.map("map", 
{
    center: [37.0902, -110.7129],
    zoom: 5
});

  //Create a title layer so map will show up in html 
  // Adding layer so map shows up in html 
  var backmap = L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
      attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      tileSize: 512,
      maxZoom: 18,
      zoomOffset: -1,
      id: "mapbox/light-v10",
      accessToken: API_KEY
    }
  );
  // add tile layer to the map.
backmap.addTo(myMap);

//create variable for USGS url 
var myurl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson";
// add coordinates from data to the map 
d3.json(myurl).then(function(data){
      
//Add all formatting right here!
//Do ONE function to find color and ONE function to find radius

function styleInfo(feature) {
    return {
      //Keep it pretty basic 
    opacity: 1,
    fillOpacity: 1,
    // color
    fillColor: getColor(feature.geometry.coordinates[2]),
    color: "#000000",
    //radius
    radius: getRadius(feature.properties.mag),
    stroke: true,
    weight: 0.5
    };
  }


  //assign color based on the magnitude of the earthquake in the JSON 
  function getColor(depth) {
    switch (true) {
    case depth > 90: return "#cf0624";
    case depth > 70: return "#cc5693"; 
    case depth > 50: return "#f59402";
    case depth > 30: return "#eded0e";
    case depth > 10: return "#9bfc32";
    
    default: return "#00ffdd";
    }
  }

  // function to see if magnitude is not 0 (will determine radius)
  function getRadius(magnitude) {
    if (magnitude === 0) {
      return 1;}
    return magnitude * 4;
  }
    
  // NOW PUT IT ALL ON GEO LAYER 
  // creating geo layer 
    L.geoJson(data, {

// creating cirlce markers for points 
pointToLayer: function(feature, latlng) {
    return L.circleMarker(latlng);
  },
  
  
  // use stylyeInfo from above 
  style: styleInfo,
  
  
  //pop ups to display needed info 
  onEachFeature: function(feature, layer) {
    layer.bindPopup(
      "Magnitude: "
        + feature.properties.mag
        + "<br>Depth: "
        + feature.geometry.coordinates[2]
        + "<br>Location: "
        + feature.properties.place
    );
  }}).addTo(myMap);


// LEGEND in the bottom right corner of page 
var legend = L.control({
    position: "bottomright"});

  // Legend attributes 
  legend.onAdd = function() {
    var div = L.DomUtil.create("div", "info legend");
    var grades = [-10, 10, 30, 50, 70, 90];
    var colors = [
      "#00ffdd",
      "#9bfc32",
      "#eded0e",
      "#f59402",
      "#cc5693",
      "#cf0624"
    ];

    // Looping to generate a label
    for (var i = 0; i < grades.length; i++) 
    {
      div.innerHTML += "<i style='background: " + colors[i] + "'></i> "
      + grades[i] + (grades[i + 1] ? "&ndash;" + grades[i + 1] + "<br>" : "+");
    }
    return div;
  };

  // add legend to map
  legend.addTo(myMap);
});
