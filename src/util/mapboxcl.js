const MapboxClient = require('mapbox')
const client = new MapboxClient('pk.eyJ1IjoiYW51a29wZmRvIiwiYSI6ImNqd29maWF4czBuZ2w0MG1nZTFqYnZpMjQifQ.M7GDJzndjWO_qcs2V2B4HQ')

client.geocodeForward('Chester, NJ', function(err, data, res) {
    // data is the geocoding result as parsed JSON
    // res is the http response, including: status, headers and entity properties
    console.log(data.features[0].center[0])
  });