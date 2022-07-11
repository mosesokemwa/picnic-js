function dateToStringName(date) {
  return new Date(date).toLocaleDateString("en-US", { weekday: "long" });
}

function suggestion(weather) {
  if (!weather || Object.keys(weather).length === 0 ) return "Sorry, I don't have enough data to suggest a picnic.";

  const goodTemp = weather.days.filter((day) => day.temp > 10);
  switch (goodTemp.length) {
    case 0:
      return "The weather isn’t looking very good this weekend, maybe stay indoors.";
    case 1:
      const picnicDay = dateToStringName(goodTemp[0].datetime);
      return `You should have your picnic on ${picnicDay}.`;
    case 2:
      const bestDay = goodTemp.reduce((acc, curr) => {
        if (acc.dew < curr.dew) {
          return acc;
        } else {
          return curr;
        }
      }, goodTemp[0]);

      const description = bestDay.description;
      const multipleOptionDay = dateToStringName(bestDay.datetime);
      return `This weekend looks nice for a picnic, ${multipleOptionDay} is best because it’s ${description.toLowerCase()} .`;
    default:
      return "Sorry, I don't have enough data to suggest a picnic.";
  }
}

module.exports = { suggestion };
