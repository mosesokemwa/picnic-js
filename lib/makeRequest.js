const https = require("https");

function getWeatherData(options) {
  return new Promise((resolve, reject) => {
    const request = https.request(options, (response) => {
      let data = "";
      response.on("data", (chunk) => {
        data += chunk;
      });
      response.on("end", () => {
        resolve(JSON.parse(data));
      });
    });
    request
      .on("error", (error) => {
        reject(error);
      })
      .end();
  });
}

module.exports = { getWeatherData };
