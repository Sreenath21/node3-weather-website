const request = require("request");

const forecast = (lat, lng, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=2aa3fdc4329eca43a50cf429299eda5a&query=${lng},${lat}&units=f`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to access weather services");
    } else if (body.error) {
      callback("Please provide proper geocode data");
    } else {
      const { current } = body;
      // callback(
      //   undefined,
      //   `Current weather is ${current.weather_descriptions[0]}. It is ${current.temperature} degree out but it feels like ${current.feelslike} degree out`
      // );

      callback(undefined, current);
    }
  });
};

module.exports = forecast;
