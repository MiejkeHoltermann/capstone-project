import styled from "styled-components";
import Image from "next/image";

export default function DestinationPreview({ trip }) {
  return (
    <StyledListItem>
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
      {`${trip.startDate.substring(8)}/${trip.startDate.substring(
        5,
        7
      )}/${trip.startDate.substring(0, 4)}`}{" "}
      -{" "}
      {`${trip.endDate.substring(8)}/${trip.endDate.substring(
        5,
        7
      )}/${trip.endDate.substring(0, 4)}`}
    </StyledListItem>
  );
}

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
