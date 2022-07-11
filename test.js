const assert = require("assert");
const { suggestion } = require("./lib/suggestions");
const { getComingWeekend } = require("./lib/getComingWeekend");

describe("getWeatherData", () => {
  it("should return the correct weekend data and format", () => {
    // 2022-07-16/2022-07-17
    const weekend = getComingWeekend();
    assert.equal(weekend, "2022-07-16/2022-07-17");
   });
  it("should return the correct suggestion", () => {
    const weather = {
      days: [
        {
          datetime: "2019-01-01",
          temp: 10,
          conditions: "sunny",
          cloudcover: 0,
        },
        {
          datetime: "2019-01-02",
          temp: 10,
          conditions: "sunny",
          cloudcover: 0,
        },
        {
          datetime: "2019-01-03",
          temp: 10,
          conditions: "sunny",
          cloudcover: 0,
        },
        {
          datetime: "2019-01-04",
          temp: 10,
          conditions: "sunny",
          cloudcover: 0,
        },
        {
          datetime: "2019-01-05",
          temp: 10,
          conditions: "sunny",
          cloudcover: 0,
        },
        {
          datetime: "2019-01-06",
          temp: 10,
          conditions: "sunny",
          cloudcover: 0,
        },
      ],
    };
    const expected =
      "The weather isn’t looking very good this weekend, maybe stay indoors.";
    const actual = suggestion(weather);
    assert.equal(actual, expected);
  });
  it("should return the correct default message", () => {

    const actual = suggestion();
    const expected =
    "Sorry, I don't have enough data to suggest a picnic.";;
    assert.equal(actual, expected);
  });
});
