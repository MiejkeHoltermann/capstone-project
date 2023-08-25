import { useState } from "react";
import styled from "styled-components";

export default function TripInputForm({ handleAddTrip }) {
  const [start, setStart] = useState("");
  return (
    <StyledForm onSubmit={handleAddTrip}>
      <StyledLabel htmlFor="location">Location: </StyledLabel>
      <StyledInput
        type="text"
        id="location"
        name="location"
        placeholder="location"
        required
      />
      <label htmlFor="startDate">Start Date: </label>
      <StyledInput
        type="date"
        id="startDate"
        name="startDate"
        onChange={(event) => setStart(event.target.value)}
        placeholder="dd/mm/yy"
        required
      />
      <label htmlFor="endDate">End Date: </label>
      <StyledInput
        type="date"
        id="endDate"
        name="endDate"
        min={start}
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
  gap: 0.8rem;
  width: 100%;
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
  border: none;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  background-color: darkblue;
  padding: 0.4rem 1rem;
`;
