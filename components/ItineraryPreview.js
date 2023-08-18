import styled from "styled-components";
import Image from "next/image";

export default function ItineraryPreview({ sight }) {
  return (
    <StyledImageWrapper>
      <StyledImage
        src={sight.image}
        height={200}
        width={200}
        alt={sight.name}
      />
    </StyledImageWrapper>
  );
}

const StyledImageWrapper = styled.div`
  height: 4rem;
  width: 4rem;
`;

const StyledImage = styled(Image)`
  border-radius: 0.4rem;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
