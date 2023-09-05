import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { uid } from "uid";
import { format } from "date-fns";
import Header from "@/components/Header";
import { CreateItinerary, SortSights } from "@/components/utils";
import Overview from "@/components/Overview";
import ItineraryItem from "@/components/ItineraryItem";
import { useRouter } from "next/router";
import Footer from "@/components/Footer";
import Lottie from "react-lottie-player";
import lottieJson from "../../public/loadingAnimation.json";

export default function Itinerary({ trips, sights, setSights }) {
  const router = useRouter();
  const currentTrip = trips.find((trip) => trip.slug === router.query.slug);
  if (!currentTrip) {
    return <StyledLottie loop animationData={lottieJson} play />;
  }
  function handleAddItem(event, date) {
    event.preventDefault();
    const name = event.target.itineraryItem.value;
    const time = event.target.time.value;
    console.log(time);
    const updatedSights = [
      ...sights,
      {
        country: router.query.slug,
        name: name,
        plannedDate: date,
        plannedTime: time,
        id: uid(),
      },
    ];
    setSights(updatedSights);
    event.target.reset();
  }
  sights;

  function handleSortItem(event, id) {
    event.preventDefault();
    const date = event.target.plannedDate.value;
    const time = event.target.plannedTime.value;
    const updatedSights = sights.map((sight) =>
      sight.id === id
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

  function handleUpdateItem(event, id) {
    event.preventDefault();
    const updatedName = event.target.editedItem.value;
    const time = event.target.editedTime.value;
    const updatedSights = sights.map((sight) =>
      sight.id === id
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

  function handleDeleteItem(id) {
    const updatedSights = sights.filter((sight) => sight.id !== id);
    setSights(updatedSights);
  }

  const datesArray = CreateItinerary(currentTrip);

  const filteredSights = sights.filter(
    (sight) => sight.country === router.query.slug
  );
  const sortedSights = SortSights(filteredSights);

  return (
    <>
      <Header trip={currentTrip} />
      <StyledHeading1>Itinerary</StyledHeading1>
      <ToggleLink href={`/${currentTrip.slug}/map`}>
        <ToggleLinkImage src="/map.svg" height={40} width={40} alt="map view" />
      </ToggleLink>
      <Scrollbox>
        <Overview
          trips={trips}
          sights={sights}
          trip={currentTrip}
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
                <StyledLabel htmlFor="dateInput">
                  Add Item:
                  <StyledInput
                    type="text"
                    id="dateInput"
                    name="itineraryItem"
                    placeholder="Add Item"
                    required
                    pattern="\S+"
                  ></StyledInput>
                </StyledLabel>
                <StyledLabel htmlFor="time" className="timeInput">
                  Set time:
                  <StyledInput type="time" id="time" name="time"></StyledInput>
                </StyledLabel>
                <StyledButton type="submit">+</StyledButton>
              </StyledForm>
            </StyledDay>
          ))}
        </StyledItinerary>
      </Scrollbox>
      <Footer buttonLink={`/${currentTrip.slug}`} buttonText="Overview" />
    </>
  );
}

const StyledLottie = styled(Lottie)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 50vw;
  height: 50vw;
`;

const StyledHeading1 = styled.h1`
  margin: 0;
  position: fixed;
  text-align: center;
  top: 10rem;
  font-size: 1.6rem;
  width: 100%;
  padding: 1rem 0;
  background-color: white;
  @media (min-width: 500px) {
    width: 500px;
  }
`;

const ToggleLink = styled(Link)`
  background-color: yellow;
  position: fixed;
  top: 11rem;
  right: 4rem;
  z-index: 1;
  background-color: teal;
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 500px) {
    left: 400px;
  }
`;

const ToggleLinkImage = styled(Image)`
  width: 1.6rem;
  height: 1.6rem;
`;

const Scrollbox = styled.div`
  width: 100%;
  margin-top: 15rem;
  margin-bottom: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 500px) {
    width: 500px;
  }
`;

const StyledItinerary = styled.ul`
  width: 100%;
  padding-left: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
`;

const StyledDay = styled.li`
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 0.4rem;
  padding: 0.4rem;
  width: 80%;
  min-height: 40px;
  gap: 0.6rem;
  @media (min-width: 500px) {
    width: 400px;
  }
`;

const StyledDate = styled.h2`
  color: teal;
  font-size: 1rem;
  margin: 0;
`;

const StyledForm = styled.form`
  margin: 0.2rem 0.6rem;
  display: grid;
  grid-template-columns: 5fr 4fr 1fr;
  gap: 10px;
`;

const StyledLabel = styled.label`
  font-size: 0;
  &.timeInput {
    justify-self: end;
  }
`;

const StyledInput = styled.input`
  border-radius: 2rem;
  padding: 0.3rem 0.6rem;
  color: rgba(0, 0, 0, 0.5);
  width: 6rem;
  border: none;
  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.4);
    border-radius: 0.2rem;
  }
  &:focus {
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 0.2rem;
    outline: none;
  }
`;

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1.4rem;
  font-weight: bold;
  color: teal;
  justify-self: end;
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;

const StyledFooter = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 1;
  background-color: white;
  height: 5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 500px) {
    width: 500px;
  }
`;

const StyledLink = styled(Link)`
  border-radius: 2rem;
  color: white;
  text-decoration: none;
  background-color: darkblue;
  padding: 0.4rem 1rem;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
`;
