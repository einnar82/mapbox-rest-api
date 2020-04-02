const express = require("express");
const apicache = require("apicache");
const cors = require("cors");
const { httpClient } = require("./helpers");
require("dotenv/config");

const cache = apicache.middleware;
const app = express();
const port = process.env.PORT || 3000;

app.use(cache("5 minutes"));
app.use(cors());

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to MAPBOX API!"
  });
});

app.get("/api/v1/forward-geocoding", (req, res) => {
  httpClient({
    method: "get",
    url: `/geocoding/v5/mapbox.places/${req.query.location}.json?access_token=${process.env.MAPBOX_TOKEN}`
  }).then(response => {
    res.json({
      payload: response.data
    });
  });
});

app.get("/api/v1/reverse-geocoding", (req, res) => {
  httpClient({
    method: "get",
    url: `/geocoding/v5/mapbox.places/${req.query.location}.json?access_token=${process.env.MAPBOX_TOKEN}`
  }).then(response => {
    res.json({
      payload: response.data
    });
  });
});

app.listen(port, () =>
  console.log(`App listening at http://localhost:${port}`)
);
