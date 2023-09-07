import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import DefaultButton from "@/components/DefaultButton";

export default function Header({ name, image, startDate, endDate }) {
  return (
    <StyledHeader>
      <StyledImageWrapper>
        <StyledImage
          src={image}
          height={450}
          width={600}
          layout="responsive"
          alt={name}
        />
        <StyledLogo>Travel</StyledLogo>
        <DefaultButton slug="travellog" icon="book" />
        <StyledTravelLogLinkBorder>
          <StyledTravelLogLink href="/travellog">
            <StyledTravelLogLinkImage
              src="/book.svg"
              height={40}
              width={40}
              alt="travel log"
            />
          </StyledTravelLogLink>
        </StyledTravelLogLinkBorder>
        {name && <StyledName>{name}</StyledName>}
        {startDate & endDate && (
          <StyledDate>
            {format(new Date(startDate), "dd/MM/yy")} -{" "}
            {format(new Date(endDate), "dd/MM/yy")}
          </StyledDate>
        )}
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

const StyledTravelLogLinkBorder = styled.div`
  width: 3.6rem;
  height: 3.6rem;
  position: fixed;
  top: 1rem;
  right: 2rem;
  border-radius: 50%;
  background: linear-gradient(180deg, #ef8344 60%, #ffaf3b 100%);
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 500px) {
    left: 26.7rem;
  }
`;

const StyledTravelLogLink = styled(Link)`
  background-color: yellow;
  position: fixed;
  top: 1.3rem;
  right: 2.3rem;
  background: linear-gradient(180deg, #ffaf3b 0%, #ef8344 60%);
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 500px) {
    left: 27rem;
  }
`;

const StyledTravelLogLinkImage = styled(Image)`
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
