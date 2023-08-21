import styled from "styled-components";
import Image from "next/image";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

export default function DetailsPopUp({ onSubmit, trips, sights }) {
  return (
    <>
      <StyledSection>
        {sights
          .filter(
            (sight) => sight.inItinerary === true && sight.plannedDate === ""
          )
          .map((sight) => (
            <StyledPopup
              key={sight.id}
              trigger={
                <StyledImage
                  src={sight.image}
                  height={40}
                  width={40}
                  alt={sight.name}
                  id={sight.name}
                />
              }
              position="bottom center"
            >
              <StyledHeading3>{sight.name}</StyledHeading3>
              <form onSubmit={onSubmit}>
                <StyledLabel htmlFor={sight.name}>Planned Date:</StyledLabel>
                <StyledInput
                  type="date"
                  id={sight.name}
                  name="plannedDate"
                  placeholder="dd/mm/yy"
                  min={trips[1].startDate}
                  max={trips[1].endDate}
                  required
                />
                <StyledLabel htmlFor="plannedTime">Planned Time:</StyledLabel>
                <StyledInput type="time" id="plannedTime" name="plannedTime" />
                <StyledButton type="submit">Save</StyledButton>
              </form>
            </StyledPopup>
          ))}
      </StyledSection>
    </>
  );
}
const StyledSection = styled.section`
  display: flex;
  width: 270px;
  height: 40px;
  gap: 6px;
  overflow: hidden;
  flex-wrap: wrap;
`;

const StyledPopup = styled(Popup)`
  &-content {
    padding: 10px;
  }
`;

const StyledImage = styled(Image)`
  border-radius: 0.3rem;
  height: 40px;
  width: 40px;
  object-fit: cover;
`;

const StyledHeading3 = styled.h3`
  font-weight: bold;
  font-size: 1rem;
  margin: 0 0 0.4rem 0;
`;

const StyledLabel = styled.label`
  margin: 0;
`;

const StyledInput = styled.input`
  width: 10rem;
  border-radius: 2rem;
  padding: 0.4rem 1rem;
  margin: 0.4rem 0;
  color: darkgrey;
`;

const StyledButton = styled.button`
  border: none;
  border-radius: 2rem;
  color: white;
  background-color: darkblue;
  padding: 0.4rem 1rem;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6);
  margin-left: 0.4rem;
`;
