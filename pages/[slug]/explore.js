import styled from "styled-components";
import { useRouter } from "next/router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SightPreview from "@/components/SightPreview";
import Lottie from "react-lottie-player";
import lottieJson from "../../public/loadingAnimation.json";

export default function Explore({
  sights,
  setSights,
  addSightsToItinerary,
  trips,
}) {
  const router = useRouter();
  const currentTrip = trips.find((trip) => trip.slug === router.query.slug);
  if (!currentTrip) {
    return <StyledLottie loop animationData={lottieJson} play />;
  }
  const filteredSights = sights.filter(
    (sight) => sight.country === router.query.slug
  );
  return (
    <>
      <Header
        name={currentTrip.name}
        image={currentTrip.image}
        startDate={currentTrip.startDate}
        endDate={currentTrip.endDate}
      />
      <StyledTitle>Explore</StyledTitle>
      <StyledMain>
        {filteredSights.length === 0 ? (
          <p>There are no sights for this destination yet.</p>
        ) : (
          filteredSights.map(
            (sight) =>
              sight.image && (
                <SightPreview
                  key={sight.id}
                  sights={sights}
                  setSights={setSights}
                  sight={sight}
                  addSightsToItinerary={addSightsToItinerary}
                />
              )
          )
        )}
      </StyledMain>
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
