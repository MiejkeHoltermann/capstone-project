import initialTrips from "../db/trips";
import styled from "styled-components";
import Image from "next/image";
import TripInputForm from "@/components/TripInputForm";
import { useState } from "react";
import { uid } from "uid";

export default function HomePage() {
  const [trips, setTrips] = useState(initialTrips);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const trip = Object.fromEntries(formData);
    const formattedStartDate = formatDate(event.target.startDate.value);
    const formattedEndDate = formatDate(event.target.endDate.value);
    const list = compareDate(formattedStartDate, formattedEndDate);
    const updatedTrips = [
      {
        id: uid(),
        image: "/placeholder.jpg",
        ...trip,
        startDate: formattedStartDate,
        endDate: formattedEndDate,
      },
      ...initialTrips,
    ];
    setTrips(updatedTrips);
    event.target.reset();
  }

  function formatDate(date) {
    const year = date.substring(2, 4);
    const month = date.substring(5, 7);
    const day = date.substring(8);
    const formattedDate = `${month}/${day}/${year}`;
    return formattedDate;
  }

  function compareDate(start, end) {
    const year = new Date().getFullYear().toString().substring(2, 4);
    const month = (new Date().getMonth() + 1).toString().padStart(2, "0");
    const day = new Date().getDate().toString().padStart(2, "0");
    const today = `${month}/${day}/${year}`;
    if (today > start) {
      if (today > end) {
        console.log("passed");
      } else {
        console.log("current");
      }
    } else {
      console.log("upcoming");
    }
  }

  compareDate();

  return (
    <div>
      <StyledHeading1>My Travel Log</StyledHeading1>
      <StyledHeading2>Create a new Trip</StyledHeading2>
      <TripInputForm onSubmit={handleSubmit} />
      <ul>
        {trips.map((trip) => (
          <StyledListItem key={trip.id}>
            <StyledImageWrapper>
              <StyledImage
                src={trip.image}
                height={800}
                width={800}
                alt={trip.location}
              />
            </StyledImageWrapper>
            {trip.location}
            <br />
            {trip.startDate} - {trip.endDate}
          </StyledListItem>
        ))}
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

const StyledListItem = styled.li`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 1rem;
`;

const StyledImageWrapper = styled.div`
  float: left;
  width: 6rem;
  height: 4rem;
  margin-right: 1rem;
`;

const StyledImage = styled(Image)`
  border-radius: 0.4rem;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
