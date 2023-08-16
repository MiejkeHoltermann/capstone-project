import styled from "styled-components";

export default function Layout({ children }) {
  return (
    <>
      <StyledHeader>
        <StyledLogo>Travel</StyledLogo>
      </StyledHeader>
      <StyledContainer>{children}</StyledContainer>
    </>
  );
}

const StyledHeader = styled.div`
  height: 3rem;
  width: 100%;
  position: relative;
`;

const StyledLogo = styled.p`
  position: absolute;
  top: 0;
  left: 1rem;
  z-index: 1;
  color: white;
  font-size: 24px;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 360px;
`;
