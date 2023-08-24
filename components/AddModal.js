import styled from "styled-components";

export default function AddModal({
  sight,
  trips,
  toggleAddModal,
  handleSortItem,
}) {
  return (
    <Modal>
      <StyledText>{sight.name}</StyledText>
      <StyledForm onSubmit={(event) => handleSortItem(event, sight.id)}>
        <StyledInputDate
          type="date"
          name="plannedDate"
          min={trips[2].startDate}
          max={trips[2].endDate}
          required
        />
        <StyledInputTime type="time" name="plannedTime" />
        <StyledButtonContainer>
          <StyledButtonRed
            type="button"
            className="cancel"
            onClick={() => toggleAddModal(sight.id)}
          >
            Cancel
          </StyledButtonRed>
          <StyledButtonGreen type="submit" className="yes">
            Save
          </StyledButtonGreen>
        </StyledButtonContainer>
      </StyledForm>
    </Modal>
  );
}

const Modal = styled.div`
  margin-top: 1rem;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 0.4rem;
  padding: 0.4rem;
  width: 280px;
  grid-area: 2/1/3/4;
`;

const StyledText = styled.p`
  margin: 0;
`;

const ButtonContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
`;

const StyledForm = styled.form`
  margin: 0.2rem 0.6rem;
  display: grid;
  grid-template-columns: 5fr 4fr 1fr;
  gap: 10px;
`;

const StyledInputDate = styled.input`
  width: 120px;
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

/* */
