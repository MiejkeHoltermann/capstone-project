import styled from "styled-components";
import Header from "@/components/Header";
import Link from "next/link";
import Image from "next/image";
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
      <Header trip={currentTrip} />
      <StyledHeading1>Itinerary</StyledHeading1>
      <ToggleLink href={`/${currentTrip.slug}/itinerary`}>
        <ToggleLinkImage
          src="/list.svg"
          height={40}
          width={40}
          alt="list view"
        />
      </ToggleLink>
      <DynamicMap sights={sights} trip={currentTrip} />
      <Footer buttonLink={`/${currentTrip.slug}`} buttonText="Overview" />
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

const StyledHeading1 = styled.h1`
  margin: 0;
  position: fixed;
  text-align: center;
  top: 10rem;
  font-size: 1.6rem;
  width: 100%;
  padding: 1rem 0;
  background-color: white;
  @media (min-width: 500px) {
    width: 500px;
  }
`;

const ToggleLink = styled(Link)`
  background-color: yellow;
  position: fixed;
  top: 11rem;
  right: 4rem;
  z-index: 1;
  background-color: teal;
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 500px) {
    left: 400px;
  }
`;

const ToggleLinkImage = styled(Image)`
  width: 1.6rem;
  height: 1.6rem;
`;

const StyledFooter = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 1000;
  background-color: white;
  height: 5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 500px) {
    width: 500px;
  }
`;

const StyledLink = styled(Link)`
  border-radius: 2rem;
  color: white;
  text-decoration: none;
  background-color: darkblue;
  padding: 0.4rem 1rem;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
`;
