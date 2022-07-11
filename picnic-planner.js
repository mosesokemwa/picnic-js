const { suggestion } = require("./lib/suggestions");
const { getWeatherData } = require("./lib/makeRequest");
const { getComingWeekend } = require("./lib/getComingWeekend");

const args = process.argv.slice(2);
if (args.length === 0) {
  throw new Error("No arguments provided");
}
const locationStr = args[0];
const location = locationStr.charAt(0).toUpperCase() + locationStr.slice(1);

const API_KEY = process.env.API_KEY;
const UNIT_GROUP = "us";
const contentType = "json";
const weekendTime = getComingWeekend();

let requestUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(
  location
)}/${weekendTime}`;
requestUrl += `?unitGroup=${UNIT_GROUP}&key=${API_KEY}&contentType=${contentType}`;

const options = {
  hostname: "weather.visualcrossing.com",
  path: requestUrl,
  method: "GET",
};

getWeatherData(options)
  .then((weather) => {
    console.log(suggestion(weather));
  })
  .catch((error) => {
    console.log(error);
  });
