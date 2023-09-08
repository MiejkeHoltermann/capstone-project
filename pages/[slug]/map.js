import Header from "@/components/Header";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Footer from "@/components/Footer";
import Lottie from "react-lottie-player";
import lottieJson from "../../public/loadingAnimation.json";

const DynamicMap = dynamic(() => import("@/components/Map"), {
  ssr: false,
});

export default function MapView({ sights, trips }) {
  const router = useRouter();
  const currentTrip = trips.find((trip) => trip.slug === router.query.slug);
  if (!currentTrip) {
    return (
      <Lottie
        loop
        animationData={lottieJson}
        play
        className="loadingAnimation"
      />
    );
  }
  return (
    <>
      <Header
        name={currentTrip.name}
        image={currentTrip.image}
        startDate={currentTrip.startDate}
        endDate={currentTrip.endDate}
      />
      <h1 className="title">Map View</h1>
      <DynamicMap sights={sights} trip={currentTrip} />
      <Footer url={`/${currentTrip.slug}`} linkText="Overview" />
    </>
  );
}
