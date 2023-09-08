import styled from "styled-components";

export default function AddButton() {
  return <StyledButton type="submit">+</StyledButton>;
}

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1.4rem;
  font-weight: bold;
  color: var(--darkTeal);
  justify-self: end;
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;
