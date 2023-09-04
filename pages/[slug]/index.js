import Header from "@/components/Header";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Lottie from "react-lottie-player";
import lottieJson from "../../public/loadingAnimation.json";
import Footer from "@/components/Footer";

export default function Overview({ trips }) {
  const router = useRouter();
  const currentTrip = trips.find((trip) => trip.slug === router.query.slug);
  if (!currentTrip) {
    return <StyledLottie loop animationData={lottieJson} play />;
  }
  return (
    <>
      <Header trip={currentTrip} />
      <Scrollbox>
        <StyledExploreLink href={`/${currentTrip.slug}/explore`}>
          Go Exploring
        </StyledExploreLink>
        <StyledLinkContainer>
          <StyledOptionsLink href={`/${currentTrip.slug}/itinerary`}>
            <Image src="/list.svg" width={60} height={60} alt="itinerary" />
          </StyledOptionsLink>
          <StyledOptionsLink href={`/${currentTrip.slug}/map`}>
            <Image src="/map.svg" width={60} height={60} alt="map" />
          </StyledOptionsLink>
        </StyledLinkContainer>
      </Scrollbox>
      <Footer buttonlink="/" buttontext="Home" />
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

const Scrollbox = styled.div`
  width: 100%;
  margin-top: 12rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 500px) {
    width: 500px;
  }
`;

const StyledHeading2 = styled.h2`
  color: teal;
  font-size: 1.6rem;
  margin: 0.4rem 0;
`;

const StyledExploreLink = styled(Link)`
  margin-top: 3rem;
  color: black;
  font-size: 1.2rem;
  text-decoration: none;
  background-color: #ef8344;
  padding: 1rem 2rem;
  border-radius: 0.6rem;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
  &:hover {
    transform: scale(1.05);
  }
`;

const StyledLinkContainer = styled.div`
  margin: 3rem 0;
  width: 90vw;
  display: grid;
  grid: repeat(2, 1fr) / repeat(3, 1fr);
  justify-items: center;
  @media (min-width: 500px) {
    width: 450px;
  }
`;

const StyledOptionsLink = styled(Link)`
  color: white;
  text-decoration: none;
  background-color: teal;
  padding: 1.2rem;
  border-radius: 0.6rem;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
  &:hover {
    transform: scale(1.05);
  }
`;
