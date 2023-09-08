import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";

export default function TripPreview({ trip }) {
  return (
    <StyledArticle>
      <StyledLink href={`/${trip.slug}`}>
        <StyledImageWrapper>
          <StyledImage
            src={trip.image}
            height={800}
            width={800}
            alt={trip.name}
          />
        </StyledImageWrapper>
        <StyledText>
          {trip.name}
          <br />
          {format(new Date(trip.startDate), "dd/MM/yy")} -{" "}
          {format(new Date(trip.endDate), "dd/MM/yy")}
        </StyledText>
      </StyledLink>
    </StyledArticle>
  );
}

const StyledArticle = styled.article`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 70%;
  margin-bottom: 1rem;
  &:hover {
    transform: scale(1.05);
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  color: black;
  text-decoration: none;
`;

const StyledText = styled.p`
  margin-top: 1.8rem;
`;

const StyledImageWrapper = styled.div`
  float: left;
  width: 10rem;
  height: 6rem;
  margin-right: 1.6rem;
`;

const StyledImage = styled(Image)`
  border-radius: 0.5rem;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
