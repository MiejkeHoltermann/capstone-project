import styled from "styled-components";
import Link from "next/link";
import Header from "@/components/Header";

import SightPreview from "@/components/SightPreview";

export default function Explore({ sights, setSights, addSightsToItinerary }) {
  return (
    <>
      <Header />
      <StyledHeading1>Explore</StyledHeading1>
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
      <StyledLink href="/itinerary">Save</StyledLink>
    </>
  );
}

const StyledHeading1 = styled.h1`
  margin-top: 8rem;
  font-size: 1.6rem;
  margin-bottom: 1rem;
`;

const StyledLink = styled(Link)`
  border-radius: 2rem;
  color: white;
  text-decoration: none;
  background-color: darkblue;
  padding: 0.4rem 1rem;
  margin-top: 2rem;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
`;
