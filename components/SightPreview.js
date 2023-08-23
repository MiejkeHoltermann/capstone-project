import styled from "styled-components";
import Image from "next/image";
import DetailsModal from "@/components/DetailsModal";

export default function TripPreview({
  sights,
  setSights,
  sight,
  addSightsToItinerary,
}) {
  function toggleDetailsModal(name) {
    const updatedSights = sights.map((sight) =>
      sight.name === name
        ? { ...sight, detailsModal: !sight.detailsModal }
        : { ...sight }
    );
    setSights(updatedSights);
  }

  return (
    <>
      {!sight.detailsModal ? (
        <StyledArticle onClick={() => toggleDetailsModal(sight.name)}>
          <StyledImageWrapper>
            <StyledImage
              src={sight.image}
              height={800}
              width={800}
              alt={sight.name}
            />
          </StyledImageWrapper>
          <StyledHeading2>{sight.name}</StyledHeading2>
        </StyledArticle>
      ) : (
        <DetailsModal
          details={sight.details}
          image={sight.image}
          name={sight.name}
          id={sight.id}
          toggleDetailsModal={toggleDetailsModal}
          addSightsToItinerary={addSightsToItinerary}
        />
      )}
    </>
  );
}

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 360px;
`;

const StyledImageWrapper = styled.div`
  height: 180px;
  width: 260px;
  margin: 2rem 0 0.6rem 0;
`;

const StyledImage = styled(Image)`
  border-radius: 0.6rem;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const StyledHeading2 = styled.h4`
  font-size: 1rem;
  margin: 0;
`;
