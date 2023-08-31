import styled from "styled-components";
import Image from "next/image";
import TripPreview from "@/components/TripPreview";
import { sortTrips } from "@/components/utils";

export default function Travellog({ trips }) {
  const { currentTrips, upcomingTrips, passedTrips } = sortTrips(trips);

  return (
    <>
      <StyledImageWrapper>
        <StyledImage
          src="/travel-log.jpg"
          height={600}
          width={800}
          layout="responsive"
          alt="Travel Notebook"
        />
      </StyledImageWrapper>
      <StyledLogo>Travel</StyledLogo>
      <Scrollbox>
        <StyledHeading1>My Travel Log</StyledHeading1>
        <StyledHeading2>Current Trips</StyledHeading2>
        {currentTrips.length === 0 ? (
          <p>You do not have any current trips yet.</p>
        ) : (
          currentTrips.map((trip) => <TripPreview key={trip.id} trip={trip} />)
        )}
        <StyledHeading2>Upcoming Trips</StyledHeading2>
        {upcomingTrips.length === 0 ? (
          <p>You do not have any upcoming trips yet.</p>
        ) : (
          upcomingTrips.map((trip) => <TripPreview key={trip.id} trip={trip} />)
        )}
        <StyledHeading2>Passed Trips</StyledHeading2>
        {passedTrips.length === 0 ? (
          <p>You do not have any passed trips yet.</p>
        ) : (
          passedTrips.map((trip) => <TripPreview key={trip.id} trip={trip} />)
        )}
      </Scrollbox>
    </>
  );
}

const StyledImageWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 12rem;
  width: 100%;
  overflow: clip;
  @media (min-width: 500px) {
    width: 500px;
  }
`;

const StyledImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const StyledLogo = styled.p`
  position: fixed;
  top: 0;
  left: 1rem;
  color: white;
  font-size: 24px;
`;

const Scrollbox = styled.div`
  width: 100%;
  margin-top: 16rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 500px) {
    width: 500px;
  }
`;

const StyledHeading1 = styled.h1`
  margin: 0;
  position: fixed;
  text-align: center;
  top: 12rem;
  font-size: 1.6rem;
  width: 100%;
  padding: 1rem 0;
  background-color: white;
`;

const StyledHeading2 = styled.h2`
  color: teal;
  font-size: 1.2em;
  margin-bottom: 1rem;
`;
