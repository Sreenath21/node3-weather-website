const request = require("request");

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1Ijoic3JlZW5hdGgyMSIsImEiOiJja3drbDFjMzIxc3ptMnZwbW52a2I5ZDR2In0.tCmsjDlOF1LT2ZzD4Z8jMw`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to access the location service", undefined);
    } else if (!body.features.length) {
      callback("Provide the proper location data", undefined);
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
