import styled from "styled-components";

export default function EditModal({
  id,
  name,
  plannedTime,
  amount,
  handleUpdateItem,
  toggleEditModal,
}) {
  return (
    <Modal>
      <StyledForm onSubmit={(event) => handleUpdateItem(event, id)}>
        <InputContainer>
          <StyledInputName
            type="text"
            name="editedItem"
            defaultValue={name}
            maxLength="100"
            pattern=".*\S+.*"
            required
          />
          {amount ? (
            <StyledInput
              type="number"
              min="-10000"
              max="10000"
              step="0.01"
              name="editedAmount"
              defaultValue={amount}
            />
          ) : (
            <StyledInput
              type="time"
              name="editedTime"
              pattern=""
              defaultValue={plannedTime}
            />
          )}
        </InputContainer>
        <StyledButton $red type="button" onClick={() => toggleEditModal(id)}>
          Cancel
        </StyledButton>
        <StyledButton type="submit">Save</StyledButton>
      </StyledForm>
    </Modal>
  );
}

const Modal = styled.div`
  padding: 1rem;
  border: 1px solid darkgrey;
  box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.3);
  border-radius: 0.6rem;
  width: 90%;
  justify-self: center;
`;

const StyledForm = styled.form`
  grid-area: 2/1/3/4;
  width: 100%;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledInputName = styled.input`
  width: 9rem;
  color: var(--darkOrange);
  padding: 0.3rem 0.6rem;
  border: none;
  font-size: 1rem;
  &:hover {
    border: 1px solid darkgrey;
    border-radius: 0.3rem;
  }
  &:focus {
    border: 1px solid darkgrey;
    border-radius: 0.3rem;
    outline: none;
  }
`;

const StyledInput = styled.input`
  width: 7rem;
  color: var(--darkOrange);
  padding: 0.3rem 0.6rem;
  border: none;
  font-size: 1rem;
  &:hover {
    border: 1px solid darkgrey;
    border-radius: 0.3rem;
  }
  &:focus {
    border: 1px solid darkgrey;
    border-radius: 0.3rem;
    outline: none;
  }
`;

const StyledButton = styled.button`
  font-size: 1rem;
  width: 4.8rem;
  height: 1.6rem;
  color: white;
  border: none;
  margin: 0.8rem 0.8rem 0 0;
  border-radius: 0.3rem;
  background-color: ${({ $red }) => ($red ? "var(--red)" : "var(--darkTeal)")};
`;
