import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";

export default function Header({ trip }) {
  return (
    <StyledHeader>
      <StyledImageWrapper>
        <StyledImage
          src={trip.image}
          height={450}
          width={600}
          layout="responsive"
          alt={trip.name}
        />
        <StyledLogo>Travel</StyledLogo>
        <TravelLogLink href="/travellog">
          <TravelLogLinkImage
            src="/book.svg"
            height={40}
            width={40}
            alt="travel log"
          />
        </TravelLogLink>
        <StyledName>{trip.name}</StyledName>
        <StyledDate>
          {format(new Date(trip.startDate), "dd/MM/yy")} -{" "}
          {format(new Date(trip.endDate), "dd/MM/yy")}
        </StyledDate>
      </StyledImageWrapper>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  height: 12rem;
  width: 100%;
  @media (min-width: 500px) {
    width: 500px;
  }
`;

const StyledImageWrapper = styled.div`
  height: 100%;
  width: 100%;
  overflow: clip;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  object-position: center -80px;
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
  background-color: #ef8344;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 500px) {
    left: 435px;
  }
`;

const TravelLogLinkImage = styled(Image)`
  width: 1.6rem;
  height: 1.6rem;
`;

const StyledName = styled.p`
  color: white;
  font-size: 1.6rem;
  width: 100%;
  text-align: center;
  position: fixed;
  top: 2.8rem;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.6);
  @media (min-width: 500px) {
    width: 500px;
  }
`;

const StyledDate = styled.p`
  color: white;
  font-size: 1.2rem;
  width: 100%;
  text-align: center;
  position: fixed;
  top: 5.4rem;
  left: 0;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.8);
  @media (min-width: 500px) {
    width: 500px;
  }
`;
