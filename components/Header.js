import styled from "styled-components";
import Image from "next/image";
import DefaultLink from "@/components/DefaultLink";
import { format } from "date-fns";

export default function Header({ name, image, startDate, endDate }) {
  return (
    <StyledHeader>
      <StyledImage src={image} fill alt="header image" />
      <StyledOverlay />
      <StyledLogo src="/logo.svg" width={100} height={90} alt="logo" />
      <DefaultLink url="/travellog" icon="book" $style="round" />
      {name && <StyledText>{name}</StyledText>}
      {startDate && (
        <StyledText className="dates">
          {format(new Date(startDate), "dd/MM/yy")} -{" "}
          {format(new Date(endDate), "dd/MM/yy")}
        </StyledText>
      )}
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 14rem;
  z-index: 1;
  @media (min-width: 500px) {
    width: 500px;
    left: 50%;
    transform: translate(-50%);
  }
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 14rem;
  object-fit: cover;
  object-position: center center;
`;

const StyledOverlay = styled.div`
  background: linear-gradient(transparent 50%, rgba(0, 0, 0, 0.4) 100%);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 14rem;
`;

const StyledLogo = styled(Image)`
  position: fixed;
  top: 0;
  left: 1rem;
  filter: drop-shadow(1px 1px 4px rgba(0, 0, 0, 0.6));
`;

const StyledText = styled.p`
  color: white;
  font-size: 1.6rem;
  width: 100%;
  text-align: center;
  position: fixed;
  top: 8.2rem;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.6);
  &.dates {
    font-size: 1.2rem;
    top: 10.8rem;
  }
`;
