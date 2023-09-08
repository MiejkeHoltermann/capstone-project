import styled from "styled-components";
import DefaultLink from "@/components/DefaultLink";

export default function Footer({ url, linkText }) {
  return (
    <StyledFooter>
      <DefaultLink url={url} $style="blue">
        {linkText}
      </DefaultLink>
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
    left: 50%;
    transform: translate(-50%);
  }
`;
