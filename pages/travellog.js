import styled from "styled-components";
import TripPreview from "@/components/TripPreview";
import { sortTrips } from "@/components/utils";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Travellog({ trips }) {
  const { currentTrips, upcomingTrips, passedTrips } = sortTrips(trips);

  return (
    <>
      <Header image="/travel-log.jpg" />
      <StyledMain>
        <StyledTitle>My Travel Log</StyledTitle>
        <StyledSubtitle>Current Trips</StyledSubtitle>
        {currentTrips.length === 0 ? (
          <p>There are no current trips in your travel log.</p>
        ) : (
          currentTrips.map((trip) => <TripPreview key={trip.id} trip={trip} />)
        )}
        <StyledSubtitle>Upcoming Trips</StyledSubtitle>
        {upcomingTrips.length === 0 ? (
          <p>There are no upcoming trips in your travel log.</p>
        ) : (
          upcomingTrips.map((trip) => <TripPreview key={trip.id} trip={trip} />)
        )}
        <StyledSubtitle>Passed Trips</StyledSubtitle>
        {passedTrips.length === 0 ? (
          <p>There are no passed trips in your travel log.</p>
        ) : (
          passedTrips.map((trip) => <TripPreview key={trip.id} trip={trip} />)
        )}
      </StyledMain>
      <Footer url="/" linkText="Home" />
    </>
  );
}
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

const StyledSubtitle = styled.h2`
  color: teal;
  width: 90%;
  text-align: center;
  font-size: 1.4em;
  margin: 2rem 0 0.6rem 0;
`;
