import styled from "styled-components";
import Image from "next/image";
import SightPreview from "@/components/SightPreview";
import Link from "next/link";

export default function Explore({ sights, handleSights }) {
  return (
    <>
      <StyledImageWrapper>
        <StyledImage
          src="/countries/jordan.jpg"
          height={600}
          width={800}
          layout="responsive"
          alt="Travel Notebook"
        />
        <StyledLocation>Jordan</StyledLocation>
        <StyledDate>29/08/23 - 16/09/23</StyledDate>
      </StyledImageWrapper>
      <StyledHeading1>Explore</StyledHeading1>
      <section>
        {sights.length === 0 ? (
          <p>There are no sights for this destination yet.</p>
        ) : (
          sights
            .filter((sight) => sight.hidden !== true)
            .map((sight) => (
              <SightPreview
                key={sight.id}
                sight={sight}
                handleSights={handleSights}
              />
            ))
        )}
      </section>
      <StyledLink href="/itinerary">Save</StyledLink>
    </>
  );
}

const StyledImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  height: 10rem;
  width: 360px;
  overflow: clip;
`;

const StyledImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const StyledLocation = styled.p`
  color: white;
  font-size: 1.6rem;
  width: 100%;
  text-align: center;
  position: absolute;
  top: 2.8rem;
  left: 0;
  z-index: 1;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.6);
`;

const StyledDate = styled.p`
  color: white;
  font-size: 1.2rem;
  width: 100%;
  text-align: center;
  position: absolute;
  top: 5.4rem;
  left: 0;
  z-index: 1;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.8);
`;

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
