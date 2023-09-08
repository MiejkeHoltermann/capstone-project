import styled from "styled-components";
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
    return <StyledLottie loop animationData={lottieJson} play />;
  }
  return (
    <>
      <Header
        name={currentTrip.name}
        image={currentTrip.image}
        startDate={currentTrip.startDate}
        endDate={currentTrip.endDate}
      />
      <StyledTitle>Map View</StyledTitle>
      <DynamicMap sights={sights} trip={currentTrip} />
      <Footer url={`/${currentTrip.slug}`} linkText="Overview" />
    </>
  );
}

const StyledLottie = styled(Lottie)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 50vw;
  height: 50vw;
`;

const StyledTitle = styled.h1`
  margin: 0;
  position: fixed;
  text-align: center;
  top: 14rem;
  font-size: 1.6rem;
  width: 100%;
  padding: 1rem 0;
  background-color: white;
  z-index: 1;
  @media (min-width: 500px) {
    width: 500px;
  }
`;
