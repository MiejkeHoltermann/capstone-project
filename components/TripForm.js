import styled from "styled-components";
import destinations from "@/db/destinations";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function TripForm({
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
      <StyledDatePickerWrapper>
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
      </StyledDatePickerWrapper>
      <StyledButtonBorder>
        <StyledButton type="submit">Save</StyledButton>
      </StyledButtonBorder>
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

const StyledDatePickerWrapper = styled.div`
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

const StyledButtonBorder = styled.div`
  width: 8rem;
  height: 3rem;
  border-radius: 5rem;
  background: linear-gradient(180deg, #0a3d62 0%, #105688 100%);
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled.button`
  font-size: 1rem;
  width: 7.5rem;
  height: 2.5rem;
  border-radius: 5rem;
  color: white;
  text-decoration: none;
  display: flex;
  border: none;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #105688 0%, #0a3d62 100%);
`;
