import styled from "styled-components";
import Header from "@/components/Header";
import Link from "next/link";
import Footer from "@/components/Footer";
import Lottie from "react-lottie-player";
import lottieJson from "../../public/loadingAnimation.json";
import SightPreview from "@/components/SightPreview";
import { useRouter } from "next/router";

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
      <Scrollbox>
        {filteredSights.length === 0 ? (
          <p>There are no sights for this destination yet.</p>
        ) : (
          filteredSights
            .filter(
              (sight) => sight.inItinerary !== true && sight.plannedDate === ""
            )
            .map((sight) => (
              <SightPreview
                key={sight.id}
                sights={sights}
                setSights={setSights}
                sight={sight}
                addSightsToItinerary={addSightsToItinerary}
              />
            ))
        )}
      </Scrollbox>
      <Footer url={`/${currentTrip.slug}/itinerary`} linkText="Itinerary" />
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
  top: 13rem;
  font-size: 1.6rem;
  width: 100%;
  padding: 1rem 0;
  background-color: white;
  @media (min-width: 500px) {
    width: 500px;
  }
`;

const Scrollbox = styled.div`
  width: 100%;
  margin-top: 16rem;
  margin-bottom: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 500px) {
    width: 500px;
  }
`;

const StyledFooter = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 1;
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
