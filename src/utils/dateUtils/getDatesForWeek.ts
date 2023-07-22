export const getDatesForWeek = () => {
  const today = new Date();
  const currentDay = today.getDay(); // 0 (Sunday) to 6 (Saturday)
  const weekStart = new Date(today); // Clone the current date
  const weekEnd = new Date(today); // Clone the current date

  // Set the weekStart to the first day (Sunday) of the current week
  weekStart.setDate(today.getDate() - currentDay);

  // Set the weekEnd to the last day (Saturday) of the current week
  weekEnd.setDate(today.getDate() + (6 - currentDay));

  // Create an array to store the dates for the week
  const weekDates = [];

  // Loop through the days of the week and add them to the array
  for (let i = 0; i < 7; i++) {
    const date = new Date(weekStart);
    date.setDate(weekStart.getDate() + i);
    weekDates.push({
      day: date.getDay(),
      date: date.getDate(),
    });
  }

  return weekDates;
};
