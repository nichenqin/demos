const request = require("request");

request(
  {
    url: "http://139.224.16.98:3001/swagger-json",
    json: true
  },
  (error, response, body) => {
    console.log(JSON.stringify(body, undefined, 2));
  }
);
