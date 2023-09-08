import styled from "styled-components";
import { useState } from "react";
import Image from "next/image";

export default function SightPreview({ sight, addSightsToItinerary }) {
  const [detailsModalOpen, setDetailsModalOpen] = useState(false);

  function toggleDetailsModal() {
    setDetailsModalOpen(!detailsModalOpen);
  }

  return (
    <>
      <StyledArticle>
        <StyledImageWrapper>
          <StyledStarButton onClick={() => addSightsToItinerary(sight.id)}>
            <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
              <rect fill="none" height="256" width="256" />
              <path
                d="M132.4,190.7l50.4,32c6.5,4.1,14.5-2,12.6-9.5l-14.6-57.4a8.7,8.7,0,0,1,2.9-8.8l45.2-37.7c5.9-4.9,2.9-14.8-4.8-15.3l-59-3.8a8.3,8.3,0,0,1-7.3-5.4l-22-55.4a8.3,8.3,0,0,0-15.6,0l-22,55.4a8.3,8.3,0,0,1-7.3,5.4L31.9,94c-7.7.5-10.7,10.4-4.8,15.3L72.3,147a8.7,8.7,0,0,1,2.9,8.8L61.7,209c-2.3,9,7.3,16.3,15,11.4l46.9-29.7A8.2,8.2,0,0,1,132.4,190.7Z"
                fill={sight.inItinerary ? "var(--darkBlue)" : "none"}
                stroke="var(--darkBlue)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
            </svg>
          </StyledStarButton>
          <StyledImage
            src={sight.image}
            height={800}
            width={800}
            alt={sight.image}
            onClick={() => toggleDetailsModal()}
          />
        </StyledImageWrapper>
        <StyledTag onClick={() => toggleDetailsModal()}>{sight.name}</StyledTag>
        {detailsModalOpen && (
          <Modal>
            <p onClick={() => toggleDetailsModal()}>{sight.details}</p>
          </Modal>
        )}
      </StyledArticle>
    </>
  );
}

const Modal = styled.div`
  width: 70%;
  margin-top: 1rem;
  border-radius: 0.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: dropdown 0.4s ease-in forwards;
  @keyframes dropdown {
    0% {
      transform-origin: top;
      transform: scaleY(0);
    }
    100% {
      transform-origin: top;
      transform: scaleY(1);
    }
  }
`;

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;
`;

const StyledImageWrapper = styled.div`
  height: 12rem;
  width: 70%;
  margin: 2rem 0 1rem 0;
  position: relative;
`;

const StyledImage = styled(Image)`
  border-radius: 0.5rem;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const StyledStarButton = styled.button`
  width: 3.6rem;
  height: 3.6rem;
  padding: 0.5rem;
  border: none;
  position: absolute;
  top: -1rem;
  right: -1rem;
  background-color: white;
  border-radius: 50%;
`;

const StyledTag = styled.p`
  font-size: 1rem;
  font-weight: bold;
  margin: 0;
  text-align: center;
`;
