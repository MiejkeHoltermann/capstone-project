import styled from "styled-components";
import Header from "@/components/Header";
import Link from "next/link";

import SightPreview from "@/components/SightPreview";

export default function Explore({ sights, setSights, addSightsToItinerary }) {
  return (
    <>
      <Header />
      <StyledHeading1>Explore</StyledHeading1>
      <Scrollbox>
        {sights.length === 0 ? (
          <p>There are no sights for this destination yet.</p>
        ) : (
          sights
            .filter(
              (sight) => sight.inItinerary !== true && sight.plannedDate === ""
            )
            .map((sight) => (
              <SightPreview
                key={sight.id}
                sights={sights}
                setSights={setSights}
                sight={sight}
                addSightsToItinerary={addSightsToItinerary}
              />
            ))
        )}
      </Scrollbox>
      <StyledFooter>
        <StyledLink href="/itinerary">Save</StyledLink>
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

const Scrollbox = styled.div`
  width: 100%;
  margin-top: 14rem;
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
