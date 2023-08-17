import styled from "styled-components";
import Image from "next/image";

export default function DetailsPopUp({
  $popUp,
  image,
  name,
  details,
  id,
  handleSights,
}) {
  return (
    <StyledPopUp $popUp={$popUp}>
      <StyledImageWrapper>
        <StyledImage src={image} height={800} width={800} alt={name} />
      </StyledImageWrapper>
      <StyledHeading4>{name}</StyledHeading4>
      <StyledDetails>{details}</StyledDetails>
      <StyledButton $popUp={$popUp} onClick={() => handleSights(id)}>
        Add to Itinerary
      </StyledButton>
    </StyledPopUp>
  );
}

const StyledPopUp = styled.div`
  height: ${({ $popUp }) => (!$popUp ? "0px" : "100%")};
  border: ${({ $popUp }) => (!$popUp ? "none" : "1px solid rgba(0,0,0,0.2)")};
  box-shadow: ${({ $popUp }) =>
    !$popUp ? "none" : "3px 3px 8px rgba(0,0,0,0.3)"};
  margin-top: 10px;
  padding: 10px;
  border-radius: 0.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledDetails = styled.p`
  overflow: hidden;
  width: 280px;
  white-space: normal;
  margin: 0;
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

const StyledHeading4 = styled.h4`
  margin: 0 0 0.8rem 0;
  overflow: hidden;
`;

const StyledButton = styled.button`
  visibility: ${({ $popUp }) => (!$popUp ? "hidden" : "visible")};
  border-radius: 2rem;
  color: white;
  border: none;
  background-color: darkblue;
  padding: 0.4rem 1rem;
  margin: 1rem 0;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
`;
