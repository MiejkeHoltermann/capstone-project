import styled from "styled-components";

export default function AddPopUp({ $popUp, onSubmit }) {
  return (
    <StyledPopUp $popUp={$popUp} onSubmit={onSubmit}>
      <StyledLabel htmlFor="itineraryItem">Add new item</StyledLabel>
      <StyledInput
        $popUp={$popUp}
        type="text"
        id="itineraryItem"
        name="itineraryItem"
        placeholder="Add new item"
        required
      />
      <StyledButton $popUp={$popUp} type="submit">
        Add
      </StyledButton>
    </StyledPopUp>
  );
}

const StyledPopUp = styled.form`
  height: ${({ $popUp }) => (!$popUp ? "0px" : "60px")};
  background-color: ${({ $popUp }) => (!$popUp ? "white" : "lightgrey")};
  margin-top: 10px;
  padding: 10px;
  border-radius: 0.6rem;
  display: flex;
  gap: 0.4rem;
  align-items: center;
`;

const StyledLabel = styled.label`
  font-size: 0;
`;

const StyledInput = styled.input`
  visibility: ${({ $popUp }) => (!$popUp ? "hidden" : "visible")};
  width: 60%;
  border-radius: 2rem;
  padding: 0.4rem 1rem;
  color: darkgrey;
`;

const StyledButton = styled.button`
  visibility: ${({ $popUp }) => (!$popUp ? "hidden" : "visible")};
  border: none;
  border-radius: 2rem;
  color: white;
  background-color: darkblue;
  padding: 0.4rem 1rem;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6);
`;
