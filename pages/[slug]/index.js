import styled from "styled-components";
import { useRouter } from "next/router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DefaultLink from "@/components/DefaultLink";
import Lottie from "react-lottie-player";
import lottieJson from "../../public/loadingAnimation.json";

export default function Overview({ trips }) {
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
      <StyledMain className="mainContent">
        <DefaultLink url={`/${currentTrip.slug}/explore`} $style="orange">
          Go Explore
        </DefaultLink>
        <StyledButtonContainer>
          <DefaultLink
            url={`/${currentTrip.slug}/itinerary`}
            icon="itinerary"
          />
          <DefaultLink url={`/${currentTrip.slug}/map`} icon="map" />
          <DefaultLink url={`/${currentTrip.slug}/expenses`} icon="expenses" />
          <DefaultLink
            url={`/${currentTrip.slug}/packing-list`}
            icon="packingList"
          />
        </StyledButtonContainer>
      </StyledMain>
      <Footer url="/" linkText="Home" />
    </>
  );
}

const StyledMain = styled.main`
  margin: 19rem 0 7rem 0;
`;

const StyledButtonContainer = styled.div`
  padding: 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  justify-items: center;
`;
