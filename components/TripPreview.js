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
        {trip.name}
        <br />
        {format(new Date(trip.startDate), "dd/MM/yy")} -{" "}
        {format(new Date(trip.endDate), "dd/MM/yy")}
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
