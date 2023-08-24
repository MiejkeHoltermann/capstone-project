import styled from "styled-components";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <StyledImageWrapper>
        <StyledImage
          src="/countries/jordan.jpg"
          height={600}
          width={800}
          layout="responsive"
          alt="jordan"
        />
        <StyledLocation>Jordan</StyledLocation>
        <StyledDate>29/08/23 - 16/09/23</StyledDate>
      </StyledImageWrapper>
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
