import styled from "styled-components";
import { uid } from "uid";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import TripInputForm from "@/components/TripInputForm";
import TripPreview from "@/components/TripPreview";

export default function HomePage({ trips, setTrips }) {
  function handleAddTrip(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const trip = Object.fromEntries(formData);
    const updatedTrips = [
      {
        ...trip,
        image: "/placeholder.jpg",
        id: uid(),
      },
      ...trips,
    ];
    setTrips(updatedTrips);
    event.target.reset();
  }

  const upcomingTrips = trips.filter(
    (trip) =>
      trip.startDate > format(new Date(), "yyyy-MM-dd") &&
      trip.endDate > format(new Date(), "yyyy-MM-dd")
  );

  const currentTrips = trips.filter(
    (trip) =>
      trip.startDate < format(new Date(), "yyyy-MM-dd") &&
      trip.endDate > format(new Date(), "yyyy-MM-dd")
  );

  const passedTrips = trips.filter(
    (trip) =>
      trip.startDate < format(new Date(), "yyyy-MM-dd") &&
      trip.endDate < format(new Date(), "yyyy-MM-dd")
  );

  return (
    <>
      <Scrollbox>
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
        <StyledHeading1>My Travel Log</StyledHeading1>
        <StyledHeading2>Create a new Trip</StyledHeading2>
        <TripInputForm handleAddTrip={handleAddTrip} />
        <StyledHeading3>Upcoming Trips</StyledHeading3>
        <section>
          {upcomingTrips.length === 0 ? (
            <p>You do not have any upcoming trips yet.</p>
          ) : (
            upcomingTrips.map((trip) => (
              <>
                <TripPreview key={trip.id} trip={trip} />
              </>
            ))
          )}
        </section>
        <StyledHeading3>Current Trips</StyledHeading3>
        <section>
          {currentTrips.length === 0 ? (
            <p>You do not have any current trips yet.</p>
          ) : (
            currentTrips.map((trip) => (
              <TripPreview key={trip.id} trip={trip} />
            ))
          )}
        </section>
        <StyledHeading3>Passed Trips</StyledHeading3>
        <section>
          {passedTrips.length === 0 ? (
            <p>You do not have any passed trips yet.</p>
          ) : (
            passedTrips.map((trip) => <TripPreview key={trip.id} trip={trip} />)
          )}
        </section>
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

const StyledHeading2 = styled.h2`
  color: teal;
  font-size: 1.2em;
  margin-bottom: 1rem;
`;

const StyledHeading3 = styled.h3`
  color: teal;
  font-size: 1.2em;
  margin-bottom: 1rem;
`;
