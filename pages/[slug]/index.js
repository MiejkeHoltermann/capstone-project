import Header from "@/components/Header";
import styled from "styled-components";
import { useRouter } from "next/router";
import Lottie from "react-lottie-player";
import lottieJson from "../../public/loadingAnimation.json";
import Footer from "@/components/Footer";
import DefaultLinkButton from "@/components/DefaultLinkButton";

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
      <Scrollbox>
        <DefaultLinkButton url={`/${currentTrip.slug}/explore`} $orange>
          Go Explore
        </DefaultLinkButton>
        <StyledButtonContainer>
          <DefaultLinkButton
            url={`/${currentTrip.slug}/itinerary`}
            icon="list"
          />
          <DefaultLinkButton url={`/${currentTrip.slug}/map`} icon="map" />
          <DefaultLinkButton
            url={`/${currentTrip.slug}/expenses`}
            icon="euro"
          />
        </StyledButtonContainer>
      </Scrollbox>
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

const Scrollbox = styled.div`
  width: 100%;
  margin-top: 18rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 500px) {
    width: 500px;
  }
`;

const StyledButtonContainer = styled.div`
  margin: 4rem 0;
  width: 90vw;
  display: grid;
  grid: repeat(2, 1fr) / repeat(3, 1fr);
  justify-items: center;
  @media (min-width: 500px) {
    width: 450px;
  }
`;
