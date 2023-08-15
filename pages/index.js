import initialTrips from "../db/trips";
import styled from "styled-components";
import TripInputForm from "@/components/TripInputForm";
import { useState } from "react";
import { uid } from "uid";
import DestinationPreview from "@/components/DestinationPreview";

export default function HomePage() {
  const [trips, setTrips] = useState(initialTrips);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const trip = Object.fromEntries(formData);
    const updatedTrips = [
      {
        ...trip,
        image: "/placeholder.jpg",
        id: uid(),
      },
      ...initialTrips,
    ];
    setTrips(updatedTrips);
    event.target.reset();
  }

  function todaysDate() {
    const year = new Date().getFullYear();
    const month = (new Date().getMonth() + 1).toString().padStart(2, "0");
    const day = new Date().getDate().toString().padStart(2, "0");
    const today = `${year}-${month}-${day}`;
    return today;
  }

  const upcomingTrips = trips.filter(
    (trip) => trip.startDate > todaysDate() && trip.endDate > todaysDate()
  );

  const currentTrips = trips.filter(
    (trip) => trip.startDate < todaysDate() && trip.endDate > todaysDate()
  );

  const passedTrips = trips.filter(
    (trip) => trip.startDate < todaysDate() && trip.endDate < todaysDate()
  );

  return (
    <div>
      <StyledHeading1>My Travel Log</StyledHeading1>
      <StyledHeading2>Create a new Trip</StyledHeading2>
      <TripInputForm onSubmit={handleSubmit} />
      <StyledHeading3>Upcoming Trips</StyledHeading3>
      <ul>
        {upcomingTrips.length === 0 ? (
          <p>You do not have any upcoming trips yet.</p>
        ) : (
          upcomingTrips.map((trip) => (
            <DestinationPreview key={trip.id} trip={trip} />
          ))
        )}
      </ul>
      <StyledHeading3>Current Trips</StyledHeading3>
      <ul>
        {currentTrips.length === 0 ? (
          <p>You do not have any current trips yet.</p>
        ) : (
          currentTrips.map((trip) => (
            <DestinationPreview key={trip.id} trip={trip} />
          ))
        )}
      </ul>
      <StyledHeading3>Passed Trips</StyledHeading3>
      <ul>
        {passedTrips.length === 0 ? (
          <p>You do not have any passed trips yet.</p>
        ) : (
          passedTrips.map((trip) => (
            <DestinationPreview key={trip.id} trip={trip} />
          ))
        )}
      </ul>
    </div>
  );
}

const StyledHeading1 = styled.h1`
  text-align: center;
  font-size: 1.6rem;
  margin-bottom: 1rem;
`;

const StyledHeading2 = styled.h2`
  color: teal;
  text-align: center;
  font-size: 1.2em;
  margin-bottom: 1rem;
`;

const StyledHeading3 = styled.h3`
  color: teal;
  margin-left: 2.3rem;
  font-size: 1.2em;
  margin-bottom: 1rem;
`;

const StyledHeadingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;
