import trips from "../public/trips";
import styled from "styled-components";
import Image from "next/image";

export default function HomePage() {
  return (
    <div>
      <StyledHeadline>My Travel Log</StyledHeadline>
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

const StyledHeadline = styled.h1`
  text-align: center;
  font-size: 1.6rem;
  margin-bottom: 2rem;
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
