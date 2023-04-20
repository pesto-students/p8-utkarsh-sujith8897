const express = require("express");
const request = require("request");

const app = express();

app.get("/", (req, res) => {
  let city = req.query.city;
  request(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8de80b0f1c1cfa92a22e9bb4be75d0da`,
    function (error, response, body) {
      let data = JSON.parse(body);
      if (response.statusCode === 200) {
        res.send(
          `The weather in your city "${city}" has ${data.weather[0].description}`
        );
      } else {
        res.send(data.message);
      }
    }
  );
});

app.listen(3000, () => console.log("Server running on port 3000"));
