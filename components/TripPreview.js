import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export default function TripPreview({ trip }) {
  return (
    <StyledArticle>
      <StyledLink href="/explore">
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
        )}/${trip.startDate.substring(2, 4)}`}{" "}
        -{" "}
        {`${trip.endDate.substring(8)}/${trip.endDate.substring(
          5,
          7
        )}/${trip.endDate.substring(2, 4)}`}
      </StyledLink>
    </StyledArticle>
  );
}

const StyledArticle = styled.article`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 16rem;
  margin-bottom: 1rem;
  &:hover {
    transform: scale(1.05);
  }
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

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;
