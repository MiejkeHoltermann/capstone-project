import styled from "styled-components";
import Link from "next/link";

export default function Footer({ buttonlink, buttontext }) {
  return (
    <StyledFooter>
      <StyledLinkBorder>
        <StyledLink href={buttonlink}>{buttontext}</StyledLink>
      </StyledLinkBorder>
    </StyledFooter>
  );
}

const StyledFooter = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 1;
  background-color: white;
  height: 5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 500px) {
    width: 500px;
  }
`;

const StyledLinkBorder = styled.div`
  width: 8rem;
  height: 3rem;
  border-radius: 5rem;
  background: linear-gradient(180deg, #0a3d62 0%, #105688 100%);
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled(Link)`
  width: 7.5rem;
  height: 2.5rem;
  border-radius: 5rem;
  color: white;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #105688 0%, #0a3d62 100%);
`;
