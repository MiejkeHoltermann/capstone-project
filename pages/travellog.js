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
      <StyledMain className="mainContent">
        <h1 className="title">My Travel Log</h1>
        <h2 className="subtitle">Current Trips</h2>
        {currentTrips.length === 0 ? (
          <p>There are no current trips in your travel log.</p>
        ) : (
          currentTrips.map((trip) => <TripPreview key={trip.id} trip={trip} />)
        )}
        <h2 className="subtitle">Upcoming Trips</h2>
        {upcomingTrips.length === 0 ? (
          <p>There are no upcoming trips in your travel log.</p>
        ) : (
          upcomingTrips.map((trip) => <TripPreview key={trip.id} trip={trip} />)
        )}
        <h2 className="subtitle">Passed Trips</h2>
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
  margin-top: 19rem;
  margin-bottom: 7rem;
`;
