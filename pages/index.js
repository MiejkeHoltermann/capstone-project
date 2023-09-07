import styled from "styled-components";
import { uid } from "uid";
import Link from "next/link";
import Image from "next/image";
import TripForm from "@/components/TripForm";
import dynamic from "next/dynamic";
import { sortTrips, countdown } from "@/components/utils";
import destinations from "@/db/destinations";
import { useState } from "react";
import { format } from "date-fns";
import Header from "@/components/Header";

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
  const { currentTrips, upcomingTrips } = sortTrips(trips);

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
  return (
    <>
      <Header image="/homepage.jpg" />
      <Scrollbox>
        <StyledSubheading>Create a new Trip</StyledSubheading>
        <TripForm
          handleAddTrip={handleAddTrip}
          startDate={startDate}
          endDate={endDate}
          handleChange={handleChange}
        />
        {successMessage && (
          <StyledSubheading>{successMessage}</StyledSubheading>
        )}

        <StyledSubheading>Upcoming Trips</StyledSubheading>
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
                <StyledName>
                  {trip.name} - {countdown(trip.startDate)}
                </StyledName>
              </StyledLink>
            </StyledArticle>
          ))
        )}
        <StyledSubheading>Current Trips</StyledSubheading>
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
                <StyledName>{trip.name}</StyledName>
              </StyledLink>
            </StyledArticle>
          ))
        )}
        <DynamicCarousel />
      </Scrollbox>
    </>
  );
}

const Scrollbox = styled.div`
  width: 100%;
  margin-top: 12rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 500px) {
    width: 500px;
  }
`;

const StyledSubheading = styled.h2`
  color: teal;
  width: 60%;
  text-align: center;
  font-size: 1.2em;
  margin: 3rem 0 1rem 0;
`;

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  &:hover {
    transform: scale(1.05);
  }
`;

const StyledImageWrapper = styled.div`
  height: 120px;
  width: 260px;
  margin: 1rem 0 0.6rem 0;
`;

const StyledImage = styled(Image)`
  border-radius: 0.6rem;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const StyledName = styled.h3`
  font-size: 1rem;
  margin: 0;
  text-align: center;
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;
