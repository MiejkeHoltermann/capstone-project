export function CreateItinerary(trip) {
  let firstDay = new Date(trip.startDate);
  let lastDay = new Date(trip.endDate);
  const datesArray = [];
  for (let i = firstDay; i <= lastDay; i.setDate(i.getDate() + 1)) {
    datesArray.push(new Date(i));
  }
  return datesArray;
}

export function FormatTime(sight) {
  const [hours, minutes] = sight.plannedTime.split(":");
  const mode = parseInt(hours) >= 12 ? "pm" : "am";
  return `${hours % 12}.${minutes} ${mode}`;
}

export function SortSights(sights) {
  const sortedSights = sights.slice().sort((a, b) => {
    if (a.plannedTime === "") {
      if (b.plannedTime === "") {
        return 0;
      } else {
        return 1;
      }
    } else {
      if (b.plannedTime === "") {
        return -1;
      }
      if (a.plannedTime < b.plannedTime) {
        return -1;
      }
      if (a.plannedTime > b.plannedTime) {
        return 1;
      }
    }
  });
  return sortedSights;
}
