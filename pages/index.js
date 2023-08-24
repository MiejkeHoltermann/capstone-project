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
      <StyledImageWrapper>
        <StyledImage
          src="/travel-log.jpg"
          height={600}
          width={800}
          layout="responsive"
          alt="Travel Notebook"
        />
      </StyledImageWrapper>
      <StyledHeading1>My Travel Log</StyledHeading1>
      <StyledHeading2>Create a new Trip</StyledHeading2>
      <TripInputForm handleAddTrip={handleAddTrip} />
      <StyledHeading3>Upcoming Trips</StyledHeading3>
      <StyledSection>
        {upcomingTrips.length === 0 ? (
          <p>You do not have any upcoming trips yet.</p>
        ) : (
          upcomingTrips.map((trip) => (
            <>
              <StyledLink href="/explore">
                <TripPreview key={trip.id} trip={trip} />
              </StyledLink>
            </>
          ))
        )}
      </StyledSection>
      <StyledHeading3>Current Trips</StyledHeading3>
      <StyledSection>
        {currentTrips.length === 0 ? (
          <p>You do not have any current trips yet.</p>
        ) : (
          currentTrips.map((trip) => <TripPreview key={trip.id} trip={trip} />)
        )}
      </StyledSection>
      <StyledHeading3>Passed Trips</StyledHeading3>
      <StyledSection>
        {passedTrips.length === 0 ? (
          <p>You do not have any passed trips yet.</p>
        ) : (
          passedTrips.map((trip) => <TripPreview key={trip.id} trip={trip} />)
        )}
      </StyledSection>
    </>
  );
}

const StyledImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  height: 10rem;
  width: 360px;
  overflow: clip;
`;

const StyledImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const StyledHeading1 = styled.h1`
  margin-top: 8rem;
  font-size: 1.6rem;
  margin-bottom: 1rem;
`;

const StyledHeading2 = styled.h2`
  color: teal;
  font-size: 1.2em;
  margin-bottom: 1rem;
`;

const StyledSection = styled.section`
  width: 80%;
`;

const StyledHeading3 = styled.h3`
  color: teal;
  font-size: 1.2em;
  margin-bottom: 1rem;
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;
