import styled from "styled-components";
import destinations from "@/db/destinations";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function TripInputForm({
  handleAddTrip,
  startDate,
  endDate,
  handleChange,
}) {
  return (
    <StyledForm onSubmit={handleAddTrip}>
      <StyledLabel htmlFor="destination">Destination: </StyledLabel>
      <StyledSelect name="destination" id="destination">
        <StyledOption selected disabled>
          Choose a destination
        </StyledOption>
        {destinations.map((destination) => (
          <StyledOption key={destination.id} value={destination.name}>
            {destination.name}
          </StyledOption>
        ))}
      </StyledSelect>
      <StyledInput>
        <StyledDatePicker
          selected={startDate}
          selectsRange
          startDate={startDate}
          endDate={endDate}
          placeholderText="Choose a date"
          dateFormat="dd/MM/yy"
          onChange={handleChange}
          required
        />
      </StyledInput>
      <StyledButton type="submit">Save</StyledButton>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
  width: 100%;
  @media (min-width: 500) {
    width: 500px;
  }
`;

const StyledLabel = styled.label`
  font-size: 0;
`;

const StyledSelect = styled.select`
  width: 60%;
  border-radius: 2rem;
  padding: 0.4rem 1rem;
  color: darkgrey;
  background-color: white;
`;

const StyledOption = styled.option`
  font-size: 1rem;
  background-color: white;
`;

const StyledInput = styled.div`
  width: 60%;
  padding: 0;
  margin: 0;
  & > * {
    width: 100%;
  }
`;

const StyledDatePicker = styled(DatePicker)`
  width: 100%;
  padding: 0.4rem 1rem;
  border-radius: 2rem;
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
