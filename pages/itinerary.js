import styled from "styled-components";
import Link from "next/link";
import { uid } from "uid";
import { format } from "date-fns";
import Header from "@/components/Header";
import { CreateItinerary, SortSights } from "@/components/utils";
import Carousel from "@/components/Carousel";
import ItineraryItem from "@/components/ItineraryItem";

export default function Itinerary({ trips, sights, setSights }) {
  function handleAddItem(event, date) {
    event.preventDefault();
    const name = event.target.itineraryItem.value;
    const time = event.target.time.value;
    const updatedSights = [
      ...sights,
      { name: name, plannedDate: date, plannedTime: time },
    ];
    setSights(updatedSights);
    event.target.reset();
  }

  function handleSortItem(event, name) {
    event.preventDefault();
    const date = event.target.plannedDate.value;
    const time = event.target.plannedTime.value;
    const updatedSights = sights.map((sight) =>
      sight.name === name
        ? {
            ...sight,
            plannedDate: date,
            plannedTime: time,
            addModal: false,
          }
        : sight
    );
    setSights(updatedSights);
  }

  function handleUpdateItem(event, name) {
    event.preventDefault();
    const updatedName = event.target.editedItem.value;
    const time = event.target.editedTime.value;
    const updatedSights = sights.map((sight) =>
      sight.name === name
        ? {
            ...sight,
            name: updatedName,
            plannedTime: time,
            editModal: !sight.editModal,
          }
        : { ...sight }
    );
    setSights(updatedSights);
  }

  function handleDeleteItem(name) {
    const updatedSights = sights.filter((sight) => sight.name !== name);
    setSights(updatedSights);
  }

  const datesArray = CreateItinerary(trips[2]);

  const sortedSights = SortSights(sights);

  return (
    <>
      <Header />
      <StyledHeading1>Itinerary</StyledHeading1>
      <Carousel
        trips={trips}
        sights={sights}
        setSights={setSights}
        handleSortItem={handleSortItem}
      />
      <StyledItinerary>
        {datesArray.map((date) => (
          <StyledDay key={uid()}>
            <StyledDate>{format(date, "dd/MM/yy")}</StyledDate>
            {sortedSights.map(
              (sight) =>
                sight.plannedDate === format(date, "yyyy-MM-dd") && (
                  <ItineraryItem
                    key={sight.id}
                    sight={sight}
                    sights={sights}
                    setSights={setSights}
                    handleDeleteItem={handleDeleteItem}
                    handleUpdateItem={handleUpdateItem}
                  />
                )
            )}
            <StyledForm
              onSubmit={(event) =>
                handleAddItem(event, format(date, "yyyy-MM-dd"))
              }
            >
              <StyledLabel htmlFor="dateInput">Add Item:</StyledLabel>
              <StyledInput
                type="text"
                id="dateInput"
                name="itineraryItem"
                placeholder="Add Item"
                required
                pattern="\S+"
              ></StyledInput>
              <StyledLabel htmlFor="time">Set time:</StyledLabel>
              <StyledInput type="time" id="time" name="time"></StyledInput>
              <StyledButton type="submit">+</StyledButton>
            </StyledForm>
          </StyledDay>
        ))}
      </StyledItinerary>
      <StyledLink href="/">Save</StyledLink>
    </>
  );
}

const StyledHeading1 = styled.h1`
  margin-top: 8rem;
  font-size: 1.6rem;
  margin-bottom: 1rem;
`;

const StyledItinerary = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  align-self: flex-start;
`;

const StyledDay = styled.li`
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 0.4rem;
  padding: 0.4rem;
  width: 280px;
  min-height: 40px;
  gap: 0.6rem;
`;

const StyledDate = styled.h2`
  color: teal;
  font-size: 1rem;
  margin: 0;
`;

const StyledForm = styled.form`
  display: flex;
  gap: 0.2rem;
`;

const StyledLabel = styled.label`
  font-size: 0;
`;

const StyledInput = styled.input`
  border-radius: 2rem;
  padding: 0.4rem 1rem;
  color: darkgrey;
  width: 7rem;
`;

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1.4rem;
  font-weight: bold;
  color: teal;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const StyledLink = styled(Link)`
  border-radius: 2rem;
  color: white;
  text-decoration: none;
  background-color: darkblue;
  padding: 0.4rem 1rem;
  margin-top: 2rem;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
`;
