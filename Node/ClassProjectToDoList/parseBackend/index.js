const express = require('express');
const ParseServer = require('parse-server').ParseServer;
var ParseDashboard = require('parse-dashboard');
const app = express();

const api = new ParseServer({
  databaseURI: 'mongodb://localhost:27017/parseDB', // Connection string for your MongoDB database
  cloud: './cloud/main.js', // Absolute path to your Cloud Code
  appId: 'myAppId',
  masterKey: 'myMasterKey', // Keep this key secret!
  serverURL: 'http://localhost:1337/parse' // Don't forget to change to https if needed
});

// Serve the Parse API on the /parse URL prefix
app.use('/parse', api);

let options = { allowInsecureHTTP: true };

let dashboard = new ParseDashboard({
  "apps": [
    {
      "serverURL": "http://localhost:1337/parse",
      "appId": "myAppId",
      "masterKey": "myMasterKey",
      "appName": "MyApp"
    }
  ]
});

app.use('/dashboard', dashboard);

app.listen(1337, function() {
  console.log('parse-server-example running on port 1337.');
});