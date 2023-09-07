import styled from "styled-components";
import Image from "next/image";
import DetailsModal from "@/components/DetailsModal";
import { useState } from "react";

export default function SightPreview({ sight, addSightsToItinerary }) {
  const [detailsModalOpen, setDetailsModalOpen] = useState(false);

  function toggleDetailsModal() {
    setDetailsModalOpen(!detailsModalOpen);
  }

  return (
    <>
      {!detailsModalOpen ? (
        <StyledArticle onClick={() => toggleDetailsModal()}>
          <StyledImageWrapper>
            <StyledImage
              src={sight.image}
              height={800}
              width={800}
              alt={sight.name}
            />
          </StyledImageWrapper>
          <StyledSubheading>{sight.name}</StyledSubheading>
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
  width: 100%;
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

const StyledSubheading = styled.h4`
  font-size: 1rem;
  margin: 0;
`;
