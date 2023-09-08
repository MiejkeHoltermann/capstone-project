import { format } from "date-fns";

export function CreateItinerary(trip) {
  let firstDay = new Date(trip.startDate);
  let lastDay = new Date(trip.endDate);
  const datesArray = [];
  for (let i = firstDay; i <= lastDay; i.setDate(i.getDate() + 1)) {
    datesArray.push(new Date(i));
  }
  return datesArray;
}

export function FormatTime(time) {
  const [hours, minutes] = time.split(":");
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

export function fillCarousel(destinations) {
  const randomDestinations = [];
  const selectedIndices = new Set();
  while (randomDestinations.length < 5) {
    const randomIndex = Math.floor(Math.random() * destinations.length);
    if (!selectedIndices.has(randomIndex)) {
      selectedIndices.add(randomIndex);
      randomDestinations.push(destinations[randomIndex]);
    }
  }
  return randomDestinations;
}

export function sortTrips(trips) {
  const today = format(new Date(), "yyyy-MM-dd");
  const currentTrips = trips.filter(
    (trip) => trip.startDate <= today && trip.endDate >= today
  );
  const upcomingTrips = trips.filter((trip) => trip.startDate > today);
  const passedTrips = trips.filter((trip) => trip.endDate < today);
  return {
    currentTrips: currentTrips,
    upcomingTrips: upcomingTrips,
    passedTrips: passedTrips,
  };
}

export function countdown(startDate) {
  const difference = +new Date(startDate) - +new Date();
  let timeLeft = 0;
  if (difference > 0) {
    if (difference > 1000 * 60 * 60 * 24) {
      timeLeft = Math.ceil(difference / (1000 * 60 * 60 * 24));
      return `${timeLeft} days left`;
    } else {
      return `1 day left`;
    }
  }
  return `0 days left`;
}
