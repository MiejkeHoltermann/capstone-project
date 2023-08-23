import styled from "styled-components";

export default function EditModal({
  sight,
  handleUpdateItem,
  toggleEditModal,
}) {
  return (
    <StyledForm onSubmit={(event) => handleUpdateItem(event, sight.name)}>
      <StyledInputName
        type="text"
        name="editedItem"
        defaultValue={sight.name}
        required
        pattern="\S+"
      />
      <StyledInputTime
        type="time"
        name="editedTime"
        defaultValue={sight.plannedTime}
      />
      <StyledButtonContainer>
        <StyledButtonRed
          type="button"
          className="cancel"
          onClick={() => toggleEditModal(sight.name)}
        >
          Cancel
        </StyledButtonRed>
        <StyledButtonGreen type="submit" className="yes">
          Save
        </StyledButtonGreen>
      </StyledButtonContainer>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  margin: 0.2rem 0.6rem;
  display: grid;
  grid-template-columns: 5fr 4fr 1fr;
  gap: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.3);
  border-radius: 0.6rem;
  padding: 10px;
`;

const StyledInputName = styled.input`
  width: 100px;
  color: #ef8344;
  border: none;
  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.4);
    border-radius: 0.2rem;
  }
  &:focus {
    border: 1px solid black;
    border-radius: 0.2rem;
    outline: none;
  }
`;

const StyledInputTime = styled.input`
  justify-self: end;
  width: 80px;
  border: none;
  color: #ef8344;
  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.4);
    border-radius: 0.2rem;
  }
  &:focus {
    border: 1px solid black;
    border-radius: 0.2rem;
    outline: none;
  }
`;

const StyledButtonContainer = styled.div`
  grid-area: 2/1/2/2;
  display: flex;
  gap: 5px;
`;

const StyledButtonRed = styled.button`
  width: 4rem;
  height: 1.4rem;
  color: white;
  border: none;
  border-radius: 0.3rem;
  background-color: #934d29;
`;

const StyledButtonGreen = styled.button`
  width: 4rem;
  height: 1.4rem;
  color: white;
  border: none;
  border-radius: 0.3rem;
  background-color: teal;
`;
