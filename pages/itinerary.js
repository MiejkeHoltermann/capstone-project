import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { uid } from "uid";
import { format } from "date-fns";
import Carousel from "@/components/Carousel";
import { CreateItinerary, FormatTime, SortSights } from "@/components/utils";

export default function Itinerary({ trips, sights, setSights }) {
  function handleSubmitItem(event) {
    event.preventDefault();
    const name = event.target.itineraryItem.value;
    const plannedDate = event.target.itineraryItem.id;
    const plannedTime = event.target.time.value;
    const updatedSights = [...sights, { name, plannedDate, plannedTime }];
    setSights(updatedSights);
    event.target.reset();
  }

  function handleSubmitDate(event) {
    event.preventDefault();
    const plannedDate = event.target.plannedDate.value;
    const plannedTime = event.target.plannedTime.value;
    const name = event.target.plannedDate.id;
    const updatedSights = sights.map((sight) =>
      sight.name === name
        ? { ...sight, plannedDate: plannedDate, plannedTime: plannedTime }
        : sight
    );
    setSights(updatedSights);
  }

  const datesArray = CreateItinerary(trips[1]);

  const sortedSights = SortSights(sights);

  return (
    <>
      <StyledImageWrapper>
        <StyledImage
          src="/countries/jordan.jpg"
          height={600}
          width={800}
          layout="responsive"
          alt="Travel Notebook"
        />
        <StyledLocation>Jordan</StyledLocation>
        <StyledDate>29/08/23 - 16/09/23</StyledDate>
      </StyledImageWrapper>
      <StyledHeading1>Itinerary</StyledHeading1>
      <Carousel trips={trips} sights={sights} onSubmit={handleSubmitDate} />
      <StyledList>
        {datesArray.map((date) => (
          <StyledListItem key={uid()}>
            <StyledHeading2>{format(date, "dd/MM/yy")}</StyledHeading2>
            {sortedSights.map(
              (sight) =>
                sight.plannedDate === format(date, "yyyy-MM-dd") && (
                  <StyledItineraryItemContainer key={sight.id}>
                    <StyledItineraryItem>{sight.name}</StyledItineraryItem>
                    <StyledItineraryTime>
                      {sight.plannedTime ? FormatTime(sight) : null}
                    </StyledItineraryTime>
                  </StyledItineraryItemContainer>
                )
            )}
            <form onSubmit={handleSubmitItem}>
              <StyledLabel htmlFor={format(date, "yyyy-MM-dd")}>
                Add Item:
              </StyledLabel>
              <StyledInput
                type="text"
                id={format(date, "yyyy-MM-dd")}
                name="itineraryItem"
                placeholder="Add Item"
                className="inputItem"
                required
                pattern="\S+"
              ></StyledInput>
              <StyledLabel htmlFor="time">Set time:</StyledLabel>
              <StyledInput type="time" id="time" name="time"></StyledInput>
              <StyledButton type="submit">+</StyledButton>
            </form>
          </StyledListItem>
        ))}
      </StyledList>
      <StyledLink href="/">Save</StyledLink>
    </>
  );
}

const StyledImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  height: 10rem;
  width: 360px;
  overflow: clip;
`;

const StyledImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const StyledLocation = styled.p`
  color: white;
  font-size: 1.6rem;
  width: 100%;
  text-align: center;
  position: absolute;
  top: 2.8rem;
  left: 0;
  z-index: 1;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.6);
`;

const StyledDate = styled.p`
  color: white;
  font-size: 1.2rem;
  width: 100%;
  text-align: center;
  position: absolute;
  top: 5.4rem;
  left: 0;
  z-index: 1;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.8);
`;

const StyledHeading1 = styled.h1`
  margin-top: 8rem;
  font-size: 1.6rem;
  margin-bottom: 1rem;
`;

const StyledList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  align-self: flex-start;
`;

const StyledListItem = styled.li`
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 0.4rem;
  padding: 0.4rem;
  width: 280px;
  min-height: 40px;
  gap: 0.3rem;
`;

const StyledHeading2 = styled.h2`
  color: teal;
  font-size: 1rem;
  margin: 0;
`;

const StyledItineraryItemContainer = styled.div`
  margin: 0.2rem 0.6rem;
  display: grid;
  grid-template-columns: 4fr 2fr;
  gap: 1rem;
`;

const StyledItineraryItem = styled.p`
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledItineraryTime = styled.p`
  margin: 0;
  text-align: right;
`;

const StyledLabel = styled.label`
  font-size: 0;
`;

const StyledInput = styled.input`
  border-radius: 2rem;
  padding: 0.4rem 1rem;
  color: darkgrey;
  width: 7rem;
  &.inputItem {
    margin-right: 0.4rem;
  }
`;

const StyledButton = styled.button`
  margin-left: 0.4rem;
  background-color: transparent;
  border: none;
  font-size: 1.4rem;
  font-weight: bold;
  color: teal;
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
