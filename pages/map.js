import styled from "styled-components";
import Header from "@/components/Header";
import Link from "next/link";
import Image from "next/image";

export default function MapView() {
  return (
    <>
      <Header />
      <StyledHeading1>Itinerary</StyledHeading1>
      <ToggleButton href="/itinerary">
        <ToggleButtonImage
          src="/list.svg"
          height={40}
          width={40}
          alt="list view"
        />
      </ToggleButton>
      <Scrollbox></Scrollbox>
      <StyledFooter>
        <StyledLink href="/">Home</StyledLink>
      </StyledFooter>
    </>
  );
}

const StyledHeading1 = styled.h1`
  margin: 0;
  position: fixed;
  text-align: center;
  top: 10rem;
  font-size: 1.6rem;
  width: 100%;
  padding: 1rem 0;
  background-color: white;
  @media (min-width: 500px) {
    width: 500px;
  }
`;

const ToggleButton = styled(Link)`
  background-color: yellow;
  position: fixed;
  top: 11rem;
  right: 4rem;
  z-index: 1;
  background-color: teal;
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ToggleButtonImage = styled(Image)`
  width: 1.6rem;
  height: 1.6rem;
`;

const Scrollbox = styled.div`
  width: 100%;
  margin-top: 15rem;
  margin-bottom: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 500px) {
    width: 500px;
  }
`;

const StyledFooter = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 1;
  background-color: white;
  height: 5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 500px) {
    width: 500px;
  }
`;

const StyledLink = styled(Link)`
  border-radius: 2rem;
  color: white;
  text-decoration: none;
  background-color: darkblue;
  padding: 0.4rem 1rem;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
`;
