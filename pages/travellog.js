import styled from "styled-components";
import Image from "next/image";
import TripPreview from "@/components/TripPreview";
import { sortTrips } from "@/components/utils";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Travellog({ trips }) {
  const { currentTrips, upcomingTrips, passedTrips } = sortTrips(trips);

  return (
    <>
      <Header image="/travel-log.jpg" />
      <Scrollbox>
        <StyledTitle>My Travel Log</StyledTitle>
        <StyledSubheading>Current Trips</StyledSubheading>
        {currentTrips.length === 0 ? (
          <p>There are no current trips in your travel log.</p>
        ) : (
          currentTrips.map((trip) => <TripPreview key={trip.id} trip={trip} />)
        )}
        <StyledSubheading>Upcoming Trips</StyledSubheading>
        {upcomingTrips.length === 0 ? (
          <p>There are no upcoming trips in your travel log.</p>
        ) : (
          upcomingTrips.map((trip) => <TripPreview key={trip.id} trip={trip} />)
        )}
        <StyledSubheading>Passed Trips</StyledSubheading>
        {passedTrips.length === 0 ? (
          <p>There are no passed trips in your travel log.</p>
        ) : (
          passedTrips.map((trip) => <TripPreview key={trip.id} trip={trip} />)
        )}
      </Scrollbox>
      <Footer url="/" linkText="Home" />
    </>
  );
}
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

const StyledTitle = styled.h1`
  margin: 0;
  position: fixed;
  text-align: center;
  top: 12rem;
  font-size: 1.6rem;
  width: 100%;
  padding: 1rem 0;
  background-color: white;
`;

const StyledSubheading = styled.h2`
  color: teal;
  font-size: 1.2em;
  margin-bottom: 1rem;
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
