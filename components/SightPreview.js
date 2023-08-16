import styled from "styled-components";
import Image from "next/image";

export default function TripPreview({ sight }) {
  return (
    <StyledArticle>
      <StyledImageWrapper>
        <StyledImage
          src={sight.image}
          height={800}
          width={800}
          alt={sight.name}
        />
      </StyledImageWrapper>
      {sight.name}
    </StyledArticle>
  );
}

const StyledArticle = styled.article`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 360px;
`;

const StyledImageWrapper = styled.div`
  float: left;
  width: 260px;
  height: 180px;
  margin-bottom: 0.6rem;
  margin-top: 1rem;
`;

const StyledImage = styled(Image)`
  border-radius: 0.6rem;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
