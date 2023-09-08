import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import dynamic from "next/dynamic";
import { uid } from "uid";
import { format } from "date-fns";
import Header from "@/components/Header";
import TripForm from "@/components/TripForm";
import { sortTrips, countdown } from "@/components/utils";
import destinations from "@/db/destinations";
import packingList from "@/db/packingList";

const DynamicCarousel = dynamic(() => import("../components/Carousel"), {
  ssr: false,
});

export default function Homepage({ trips, setTrips }) {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [successMessage, setSuccessMessage] = useState("");
  function handleChange(dates) {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  }

  function handleAddTrip(event) {
    event.preventDefault();
    const name = event.target.destination.value;
    const currentDestination = destinations.find(
      (destination) => destination.name === name
    );
    const updatedTrips = [
      {
        slug: name.toLowerCase().replace(/\s+/g, "-"),
        name: name,
        startDate: format(startDate, "yyyy-MM-dd"),
        endDate: format(endDate, "yyyy-MM-dd"),
        image: currentDestination.image,
        geocode: currentDestination.geocode,
        expenses: [],
        packingList: packingList,
        id: uid(),
      },
      ...trips,
    ];
    setTrips(updatedTrips);
    event.target.reset();
    setStartDate();
    setEndDate();
    setSuccessMessage("You successfully created a new trip.");
  }

  const { currentTrips, upcomingTrips } = sortTrips(trips);

  return (
    <>
      <Header image="/homepage.jpg" />
      <StyledMain>
        <StyledSubtitle>Create a new Trip</StyledSubtitle>
        <TripForm
          handleAddTrip={handleAddTrip}
          startDate={startDate}
          endDate={endDate}
          handleChange={handleChange}
        />
        {successMessage && <StyledSubtitle>{successMessage}</StyledSubtitle>}

        <StyledSubtitle>Upcoming Trips</StyledSubtitle>
        {upcomingTrips.length === 0 ? (
          <p>There are no upcoming trips yet.</p>
        ) : (
          upcomingTrips.map((trip) => (
            <StyledArticle key={trip.id}>
              <StyledLink href={`/${trip.slug}`}>
                <StyledImageWrapper>
                  <StyledImage
                    src={trip.image}
                    height={800}
                    width={800}
                    alt={trip.name}
                  />
                </StyledImageWrapper>
                <StyledTag>
                  {trip.name} - {countdown(trip.startDate)}
                </StyledTag>
              </StyledLink>
            </StyledArticle>
          ))
        )}
        <StyledSubtitle>Current Trips</StyledSubtitle>
        {currentTrips.length === 0 ? (
          <p>There are no current trips yet.</p>
        ) : (
          currentTrips.map((trip) => (
            <StyledArticle key={trip.id}>
              <StyledLink href={`/${trip.slug}`}>
                <StyledImageWrapper>
                  <StyledImage
                    src={trip.image}
                    height={800}
                    width={800}
                    alt={trip.name}
                  />
                </StyledImageWrapper>
                <StyledTag>{trip.name}</StyledTag>
              </StyledLink>
            </StyledArticle>
          ))
        )}
        <DynamicCarousel />
      </StyledMain>
    </>
  );
}

const StyledMain = styled.main`
  margin-top: 15rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
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

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  &:hover {
    transform: scale(1.05);
  }
`;

const StyledLink = styled(Link)`
  width: 100%;
  color: black;
  text-decoration: none;
`;

const StyledImageWrapper = styled.div`
  height: 9rem;
  width: 100%;
  margin: 1rem 0 0.6rem 0;
`;

const StyledImage = styled(Image)`
  border-radius: 0.5rem;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const StyledTag = styled.p`
  font-size: 1rem;
  font-weight: bold;
  margin: 0;
  text-align: center;
`;
