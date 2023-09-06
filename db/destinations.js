import { uid } from "uid";

const destinations = [
  {
    slug: "australia",
    name: "Australia",
    image: "/destinations/australia.jpg",
    geocode: [-24.193, 135.17],
    id: uid(),
  },
  {
    slug: "chile",
    name: "Chile",
    image: "/destinations/chile.jpg",
    geocode: [-29.207, -70.729],
    id: uid(),
  },
  {
    slug: "croatia",
    name: "Croatia",
    image: "/destinations/croatia.jpg",
    geocode: [45.388, 15.539],
    id: uid(),
  },
  {
    slug: "greece",
    name: "Greece",
    image: "/destinations/greece.jpg",
    geocode: [38.24, 23.039],
    id: uid(),
  },
  {
    slug: "jordan",
    name: "Jordan",
    image: "/destinations/jordan.jpg",
    geocode: [31.312, 35.939],
    id: uid(),
  },
  {
    slug: "morocco",
    name: "Morocco",
    image: "/destinations/morocco.jpg",
    geocode: [32.531, -6.891],
    id: uid(),
  },
  {
    slug: "thailand",
    name: "Thailand",
    image: "/destinations/thailand.jpg",
    geocode: [12.663, 100.388],
    id: uid(),
  },
];

export default destinations;
