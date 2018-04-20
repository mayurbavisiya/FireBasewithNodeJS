const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()
var firebase = require("firebase");
var GeoFire = require('geofire');

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.htm'))
})


var port = process.env.PORT || 8000
app.listen(port, function() {
    console.log("App is running on port " + port);
});



 
