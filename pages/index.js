import styled from "styled-components";
import { uid } from "uid";
import Link from "next/link";
import Image from "next/image";
import TripInputForm from "@/components/TripInputForm";
import dynamic from "next/dynamic";
import { sortTrips, countdown } from "@/components/utils";

const DynamicCarousel = dynamic(() => import("../components/Carousel"), {
  ssr: false,
});

export default function Homepage({ trips, setTrips }) {
  const { currentTrips, upcomingTrips } = sortTrips(trips);

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

  return (
    <>
      <StyledImageWrapperHeader>
        <StyledImageHeader
          src="/homepage.jpg"
          height={600}
          width={800}
          layout="responsive"
          alt="Homepage Header"
        />
      </StyledImageWrapperHeader>
      <StyledLogo>Travel</StyledLogo>
      <TravelLogLink href="/travellog">
        <TravelLogLinkImage
          src="/book.svg"
          height={40}
          width={40}
          alt="travel log"
        />
      </TravelLogLink>
      <Scrollbox>
        <StyledHeading2>Create a new Trip</StyledHeading2>
        <TripInputForm handleAddTrip={handleAddTrip} />
        <StyledHeading2>Current Trips</StyledHeading2>
        {currentTrips.length === 0 ? (
          <p>You do not have any current trips yet.</p>
        ) : (
          currentTrips.map((trip) => (
            <StyledArticle key={trip.id}>
              <StyledLink href="/explore">
                <StyledImageWrapper>
                  <StyledImage
                    src={trip.image}
                    height={800}
                    width={800}
                    alt={trip.location}
                  />
                </StyledImageWrapper>
                <StyledHeading3>{trip.location}</StyledHeading3>
              </StyledLink>
            </StyledArticle>
          ))
        )}
        <StyledHeading2>Upcoming Trips</StyledHeading2>
        {upcomingTrips.length === 0 ? (
          <p>You do not have any upcoming trips yet.</p>
        ) : (
          upcomingTrips.map((trip) => (
            <StyledArticle key={trip.id}>
              <StyledImageWrapper>
                <StyledImage
                  src={trip.image}
                  height={800}
                  width={800}
                  alt={trip.location}
                />
              </StyledImageWrapper>
              <StyledHeading3>
                {trip.location} - {countdown(trip.startDate)}
              </StyledHeading3>
            </StyledArticle>
          ))
        )}
        <DynamicCarousel />
      </Scrollbox>
    </>
  );
}

const StyledImageWrapperHeader = styled.div`
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

const StyledImageHeader = styled(Image)`
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

const TravelLogLink = styled(Link)`
  background-color: yellow;
  position: fixed;
  top: 1rem;
  right: 2rem;
  z-index: 1;
  background-color: #ef8344;
  width: 3.4rem;
  height: 3.4rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 500px) {
    left: 425px;
  }
`;

const TravelLogLinkImage = styled(Image)`
  width: 2rem;
  height: 2rem;
`;

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

const StyledHeading2 = styled.h2`
  color: teal;
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

const StyledHeading3 = styled.h4`
  font-size: 1rem;
  margin: 0;
  text-align: center;
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;
