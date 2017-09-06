const axios = require("axios");

axios
  .get("https://maps.googleapis.com/maps/api/geocode/json?address=shanghai")
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });
