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
      <StyledMain>
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

const StyledLottie = styled(Lottie)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 50vw;
  height: 50vw;
`;

const StyledMain = styled.main`
  margin: 19rem 0 7rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  @media (min-width: 500px) {
    width: 500px;
  }
`;

const StyledButtonContainer = styled.div`
  padding: 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  justify-items: center;
`;
