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
      <label htmlFor="destination" className="invisibleLabel">
        Destination:
      </label>
      <StyledSelect
        name="destination"
        id="destination"
        required
        className="defaultInput"
        defaultValue="default"
      >
        <StyledOption disabled value="default">
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
          className="defaultInput"
        />
      </StyledDatePickerWrapper>
      <StyledButton type="submit">Save</StyledButton>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

const StyledSelect = styled.select`
  width: 60%;
  appearance: none;
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
  &::placeholder {
    opacity: 1;
  }
`;

const StyledButton = styled.button`
margin-top: 0.6rem;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 5rem;
  background: linear-gradient(
    180deg,
    var(--lightBlue) 0%,
    var(--darkBlue) 100%
  );
  height: 2.2rem;
  width: 7rem;
  position: relative;
  &::before {
    content: "";
    background-image: linear-gradient(
      180deg,
      var(--darkBlue) 0%,
      var(--lightBlue) 100%
    );
    border-radius: 5rem;
    height: 2.8rem;
    width: 7.6rem;
    left: -0.3rem;
    top: -0.3rem;
    position: absolute;
    z-index: -1;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.4);
    }
  }
`;
