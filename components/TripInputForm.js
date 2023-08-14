import styled from "styled-components";

export default function TripInputForm({ onSubmit }) {
  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledLabel htmlFor="location">Location: </StyledLabel>
      <StyledInput
        type="text"
        id="location"
        name="location"
        placeholder="location"
        required
      />
      <StyledLabel htmlFor="startDate">Start Date: </StyledLabel>
      <StyledInput
        type="text"
        id="startDate"
        name="startDate"
        placeholder="dd/mm/yy"
        required
      />
      <StyledLabel htmlFor="endDate">End Date: </StyledLabel>
      <StyledInput
        type="text"
        id="endDate"
        name="endDate"
        placeholder="dd/mm/yy"
        required
      />
      <StyledButton type="submit">Save</StyledButton>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
`;

const StyledLabel = styled.label`
  font-size: 0;
`;

const StyledInput = styled.input`
  width: 60%;
  border-radius: 2rem;
  padding: 0.4rem 1rem;
  color: darkgrey;
`;

const StyledButton = styled.button`
  border-radius: 2rem;
  color: white;
  background-color: darkblue;
  padding: 0.4rem 1rem;
`;
