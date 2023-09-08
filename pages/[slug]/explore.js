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
    return (
      <Lottie
        loop
        animationData={lottieJson}
        play
        className="loadingAnimation"
      />
    );
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
      <h1 className="title">Explore</h1>
      <StyledMain className="mainContent">
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

const StyledMain = styled.main`
  margin: 19rem 0 7rem 0;
`;
