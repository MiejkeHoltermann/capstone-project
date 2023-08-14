import styled from "styled-components";
import Image from "next/image";

export default function Header() {
  return (
    <StyledHeader>
      <Image
        src="/travel-log.jpg"
        height={600}
        width={800}
        layout="responsive"
        alt="Travel Notebook"
      />
      <StyledLogo>Travel</StyledLogo>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  height: 10rem;
  width: 100%;
  overflow: clip;
  position: relative;
`;

const StyledLogo = styled.p`
  position: absolute;
  top: 0;
  left: 1rem;
  z-index: 100;
  color: white;
  font-size: 24px;
`;
