import styled from "styled-components";
import Image from "next/image";

export default function DetailsModal({
  details,
  image,
  name,
  id,
  toggleDetailsModal,
  addSightsToItinerary,
}) {
  return (
    <Modal>
      <Clickzone onClick={() => toggleDetailsModal()}>
        <StyledImageWrapper>
          <StyledImage src={image} height={800} width={800} alt={name} />
        </StyledImageWrapper>
        <StyledSubheading>{name}</StyledSubheading>
        <StyledDetails>{details}</StyledDetails>
      </Clickzone>
      <StyledButton onClick={() => addSightsToItinerary(id)}>
        Add to Itinerary
      </StyledButton>
    </Modal>
  );
}

const Modal = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  width: 80%;
  box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.3);
  margin-top: 10px;
  border-radius: 0.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Clickzone = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledImageWrapper = styled.div`
  width: 260px;
  height: 180px;
  margin-bottom: 0.6rem;
  margin-top: 10px;
`;

const StyledImage = styled(Image)`
  border-radius: 0.6rem;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const StyledSubheading = styled.h4`
  margin: 0 0 0.6rem 0;
  overflow: hidden;
`;

const StyledDetails = styled.p`
  overflow: hidden;
  width: 260px;
  white-space: normal;
  margin: 0;
`;

const StyledButton = styled.button`
  border-radius: 2rem;
  color: white;
  border: none;
  background-color: darkblue;
  padding: 0.4rem 1rem;
  margin: 1rem 0;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
`;
