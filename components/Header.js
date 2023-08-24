import styled from "styled-components";
import Image from "next/image";

export default function Header() {
  return (
    <StyledHeader>
      <StyledImageWrapper>
        <StyledImage
          src="/countries/jordan.jpg"
          height={450}
          width={600}
          layout="responsive"
          alt="jordan"
        />
        <StyledLogo>Travel</StyledLogo>
        <StyledLocation>Jordan</StyledLocation>
        <StyledDate>29/08/23 - 16/09/23</StyledDate>
      </StyledImageWrapper>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  height: 10rem;
  width: 100%;
  @media (min-width: 500px) {
    width: 500px;
  }
`;

const StyledImageWrapper = styled.div`
  height: 100%;
  width: 100%;
  overflow: clip;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
`;

const StyledLogo = styled.p`
  position: fixed;
  top: 0;
  left: 1rem;
  color: white;
  font-size: 24px;
`;

const StyledLocation = styled.p`
  color: white;
  font-size: 1.6rem;
  width: 100%;
  text-align: center;
  position: fixed;
  top: 2.8rem;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.6);
  @media (min-width: 500px) {
    width: 500px;
  }
`;

const StyledDate = styled.p`
  color: white;
  font-size: 1.2rem;
  width: 100%;
  text-align: center;
  position: fixed;
  top: 5.4rem;
  left: 0;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.8);
  @media (min-width: 500px) {
    width: 500px;
  }
`;
