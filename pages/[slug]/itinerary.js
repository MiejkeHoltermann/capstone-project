import styled from "styled-components";
import { useRouter } from "next/router";
import { uid } from "uid";
import { format } from "date-fns";
import Header from "@/components/Header";
import ItineraryItem from "@/components/ItineraryItem";
import Footer from "@/components/Footer";
import AddButton from "@/components/AddButton";
import { CreateItinerary, SortSights } from "@/components/utils";
import Lottie from "react-lottie-player";
import lottieJson from "../../public/loadingAnimation.json";

export default function Itinerary({ trips, sights, setSights }) {
  const router = useRouter();
  const currentTrip = trips.find((trip) => trip.slug === router.query.slug);
  if (!currentTrip) {
    return (
      <Lottie
        loop
        animationData={lottieJson}
        play
        className="loadingAnimation"
      />
    );
  }

  function handleAddItem(event, date) {
    event.preventDefault();
    const name = event.target.itineraryItem.value;
    const time = event.target.time.value;
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
      <Header
        name={currentTrip.name}
        image={currentTrip.image}
        startDate={currentTrip.startDate}
        endDate={currentTrip.endDate}
      />
      <h1 className="title">Itinerary</h1>
      <StyledMain className="mainContent">
        <StyledItinerary>
          {datesArray.map((date) => (
            <StyledDay key={uid()}>
              <StyledDate>{format(date, "dd/MM/yy")}</StyledDate>
              {sortedSights.map(
                (sight) =>
                  sight.plannedDate === format(date, "yyyy-MM-dd") && (
                    <ItineraryItem
                      key={sight.id}
                      id={sight.id}
                      name={sight.name}
                      sight={sight}
                      plannedTime={sight.plannedTime}
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
                <StyledLabel htmlFor="itemInput" className="invisibleLabel">
                  Add Item:
                  <StyledInput
                    type="text"
                    id="itemInput"
                    name="itineraryItem"
                    placeholder="Add Item"
                    maxlength="100"
                    required
                    pattern=".*\S+.*"
                    className="lowkeyInput"
                  ></StyledInput>
                </StyledLabel>
                <StyledLabel htmlFor="time" className="timeInput">
                  Set time:
                  <StyledInput
                    type="time"
                    id="time"
                    name="time"
                    className="lowkeyInput"
                  ></StyledInput>
                </StyledLabel>
                <AddButton />
              </StyledForm>
            </StyledDay>
          ))}
        </StyledItinerary>
      </StyledMain>
      <Footer url={`/${currentTrip.slug}`} linkText="Overview" />
    </>
  );
}

const StyledMain = styled.main`
  margin: 19rem 0 7rem 0;
`;

const StyledItinerary = styled.ul`
  width: 100%;
  padding-left: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
`;

const StyledDay = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  border: 1px solid darkgrey;
  border-radius: 0.5rem;
  padding: 1rem;
  width: 80%;
  min-height: 3rem;
`;

const StyledDate = styled.p`
  color: var(--darkTeal);
  align-self: flex-start;
  margin-left: 1rem;
  font-weight: bold;
`;

const StyledForm = styled.form`
  width: 100%;
  margin-top: 0.8rem;
  display: flex;
  justify-content: space-between;
`;

const StyledLabel = styled.label`
  font-size: 0;
  &.timeInput {
    justify-self: end;
  }
`;

const StyledInput = styled.input`
  width: 7rem;
  color: darkgrey;
`;
