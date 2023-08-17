import styled from "styled-components";
import Image from "next/image";
import DetailsPopUp from "./DetailsPopUp";
import { useState } from "react";

export default function TripPreview({ sight, handleSights }) {
  const [popUp, setPopUp] = useState(false);

  function handlePopUp() {
    setPopUp(!popUp);
  }

  return (
    <StyledArticle onClick={handlePopUp}>
      <DetailsPopUp
        $popUp={popUp}
        details={sight.details}
        image={sight.image}
        name={sight.name}
        id={sight.id}
        handleSights={handleSights}
      />
      <StyledImageWrapper $popUp={popUp}>
        <StyledImage
          src={sight.image}
          height={800}
          width={800}
          alt={sight.name}
        />
      </StyledImageWrapper>
      <StyledHeading4 $popUp={popUp}>{sight.name}</StyledHeading4>
    </StyledArticle>
  );
}

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 360px;
`;

const StyledImageWrapper = styled.div`
  height: ${({ $popUp }) => (!$popUp ? "180px " : "0px")};
  width: 260px;
  margin-bottom: 0.6rem;
`;

const StyledImage = styled(Image)`
  border-radius: 0.6rem;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const StyledHeading4 = styled.h4`
  font-size: ${({ $popUp }) => (!$popUp ? "1rem " : "0")};
  margin: 0;
`;
