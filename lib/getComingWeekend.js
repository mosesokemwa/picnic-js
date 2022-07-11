function getComingWeekend() {
    const today = new Date();
    const saturday = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + 6
    );
    const sunday = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + 7
    );
    const saturdayString = saturday.toISOString().split("T")[0];
    const sundayString = sunday.toISOString().split("T")[0];
    return `${saturdayString}/${sundayString}`;
  }

  module.exports = { getComingWeekend };