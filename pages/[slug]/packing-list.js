import styled from "styled-components";
import { useRouter } from "next/router";
import { uid } from "uid";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AddButton from "@/components/AddButton";
import Lottie from "react-lottie-player";
import lottieJson from "../../public/loadingAnimation.json";

export default function PackingList({ trips, setTrips }) {
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

  function handleAddItem(event, category) {
    event.preventDefault();
    const name = event.target.itemInput.value;
    const number = event.target.numberInput.value;
    const index = trips.findIndex((trip) => trip.slug === currentTrip.slug);
    const updatedTrip = { ...trips[index] };
    updatedTrip.packingList.push({
      category: category,
      name: name,
      number: number,
      checked: true,
      id: uid(),
    });
    const updatedTrips = [...trips];
    updatedTrips[index] = updatedTrip;
    setTrips(updatedTrips);
    event.target.reset();
  }

  function handleCheckboxChange(event, slug, id) {
    const tripIndex = trips.findIndex((trip) => trip.slug === slug);
    const updatedTrips = [...trips];
    const itemIndex = updatedTrips[tripIndex].packingList.findIndex(
      (item) => item.id === id
    );
    if (event.target.type === "checkbox") {
      updatedTrips[tripIndex].packingList[itemIndex].checked =
        event.target.checked;
      if (!event.target.checked) {
        updatedTrips[tripIndex].packingList[itemIndex].number = "";
      }
    } else if (event.target.type === "number") {
      const newValue = parseInt(event.target.value, 10);
      if (newValue < 0) {
        event.target.value = "0";
      } else if (newValue > 100) {
        event.target.value = "100";
      }

      updatedTrips[tripIndex].packingList[itemIndex].number =
        event.target.value;
    }
    setTrips(updatedTrips);
  }

  const packingCategories = [
    { name: "Clothes", id: uid() },
    { name: "Accessories", id: uid() },
    { name: "Cosmetics", id: uid() },
  ];
  return (
    <>
      <Header
        name={currentTrip.name}
        image={currentTrip.image}
        startDate={currentTrip.startDate}
        endDate={currentTrip.endDate}
      />
      <h1 className="title">My Packing List</h1>
      <StyledMain className="mainContent">
        <StyledPackingList>
          {packingCategories.map((category) => (
            <StyledCategory key={category.id}>
              <StyledName>{category.name}</StyledName>
              {currentTrip.packingList
                .filter((item) => item.category === category.name)
                .map((item) => (
                  <StyledItem key={item.id}>
                    <StyledCheckboxLabel htmlFor={item.id}>
                      <StyledCheckbox
                        type="checkbox"
                        value={item.name}
                        name={item.name}
                        id={item.id}
                        checked={item.checked}
                        onChange={(event) =>
                          handleCheckboxChange(event, currentTrip.slug, item.id)
                        }
                      />
                      {item.name}
                    </StyledCheckboxLabel>
                    {item.checked && (
                      <StyledLabel htmlFor="number">
                        <StyledNumber
                          type="number"
                          id="number"
                          placeholder="amount"
                          defaultValue={item.number}
                          className="lowkeyInput"
                          onBlur={(event) =>
                            handleCheckboxChange(
                              event,
                              currentTrip.slug,
                              item.id
                            )
                          }
                        />
                        number
                      </StyledLabel>
                    )}
                  </StyledItem>
                ))}
              <StyledForm
                onSubmit={(event) => handleAddItem(event, category.name)}
              >
                <StyledLabel htmlFor="itemInput">
                  Add Item:
                  <StyledItemInput
                    type="text"
                    id="itemInput"
                    name="itemInput"
                    placeholder="Add Item"
                    maxLength="100"
                    required
                    pattern=".*\S+.*"
                    className="lowkeyInput"
                  ></StyledItemInput>
                </StyledLabel>
                <StyledLabel htmlFor="numberInput" className="numberInput">
                  Amount:
                  <StyledNumberInput
                    type="number"
                    min="0"
                    max="100"
                    placeholder="amount"
                    id="numberInput"
                    name="numberInput"
                    className="lowkeyInput"
                  ></StyledNumberInput>
                </StyledLabel>
                <AddButton />
              </StyledForm>
            </StyledCategory>
          ))}
        </StyledPackingList>
      </StyledMain>
      <Footer url={`/${currentTrip.slug}`} linkText="Overview" />
    </>
  );
}

const StyledMain = styled.main`
  margin: 19rem 0 7rem 0;
`;

const StyledPackingList = styled.ul`
  width: 100%;
  padding-left: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
`;

const StyledCategory = styled.li`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  border-radius: 0.5rem;
  width: 80%;
  min-height: 3rem;
`;

const StyledName = styled.p`
  color: var(--darkTeal);
  align-self: flex-start;
  margin-left: 1rem;
  font-weight: bold;
`;

const StyledItem = styled.div`
  display: grid;
  grid-template-columns: 4fr 3fr;
`;

const StyledNumber = styled.input`
  margin-left: 4rem;
  color: var(--darkOrange);
  width: 7rem;
  &::placeholder {
    opacity: 1;
  }
`;

const StyledCheckbox = styled.input`
  width: 1.4rem;
  height: 1.4rem;
  margin-right: 1rem;
  accent-color: var(--darkBlue);
`;

const StyledForm = styled.form`
  width: 100%;
  margin-top: 0.8rem;
  display: flex;
  justify-content: space-between;
`;

const StyledCheckboxLabel = styled.label`
  width: 10rem;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledLabel = styled.label`
  font-size: 0;
  &.numberInput {
    justify-self: end;
  }
`;

const StyledItemInput = styled.input`
  width: 8rem;
  color: darkgrey;
`;

const StyledNumberInput = styled.input`
  width: 7rem;
  color: darkgrey;
`;
