import { uid } from "uid";

const trips = [
  {
    slug: "jordan",
    name: "Jordan",
    startDate: "2025-08-29",
    endDate: "2025-09-07",
    image: "/destinations/jordan.jpg",
    geocode: [31.312, 35.939],
    id: uid(),
    expenses: [
      { name: "Breakfast", amount: "20.00", date: "2025-08-29", id: uid() },
      { name: "City Tour", amount: "18.99", date: "2025-08-29", id: uid() },
      { name: "Dinner", amount: "30.00", date: "2025-08-29", id: uid() },
      { name: "Hotel", amount: "45.00", date: "2025-08-29", id: uid() },
      {
        name: "Bus to Dead Sea",
        amount: "5,80",
        date: "2025-08-30",
        id: uid(),
      },
    ],
  },
];

export default trips;
