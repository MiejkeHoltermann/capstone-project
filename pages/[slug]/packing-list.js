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
    return <StyledLottie loop animationData={lottieJson} play />;
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
    { name: "Technology", id: uid() },
  ];
  return (
    <>
      <Header
        name={currentTrip.name}
        image={currentTrip.image}
        startDate={currentTrip.startDate}
        endDate={currentTrip.endDate}
      />
      <StyledTitle>My Packing List</StyledTitle>
      <StyledMain>
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
                  <StyledInput
                    type="text"
                    id="itemInput"
                    name="itemInput"
                    placeholder="Add Item"
                    maxLength="100"
                    required
                    pattern=".*\S+.*"
                  ></StyledInput>
                </StyledLabel>
                <StyledLabel htmlFor="numberInput" className="numberInput">
                  Amount:
                  <StyledInput
                    type="number"
                    min="0"
                    max="100"
                    placeholder="amount"
                    id="numberInput"
                    name="numberInput"
                  ></StyledInput>
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

const StyledLottie = styled(Lottie)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 50vw;
  height: 50vw;
`;

const StyledMain = styled.main`
  margin: 19rem 0 7rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  @media (min-width: 500px) {
    width: 500px;
  }
`;

const StyledTitle = styled.h1`
  margin: 0;
  position: fixed;
  text-align: center;
  top: 14rem;
  font-size: 1.6rem;
  width: 100%;
  padding: 1rem 0;
  background-color: white;
  z-index: 1;
  @media (min-width: 500px) {
    width: 500px;
  }
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
  padding: 0.3rem 0.6rem;
  border: none;
  font-size: 1rem;
  &:hover {
    border: 1px solid darkgrey;
    border-radius: 0.3rem;
  }
  &:focus {
    border: 1px solid darkgrey;
    border-radius: 0.3rem;
    outline: none;
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

const StyledInput = styled.input`
  width: 7rem;
  color: darkgrey;
  padding: 0.3rem 0.6rem;
  border: none;
  font-size: 1rem;
  &:hover {
    border: 1px solid darkgrey;
    border-radius: 0.3rem;
  }
  &:focus {
    border: 1px solid darkgrey;
    border-radius: 0.3rem;
    outline: none;
  }
`;
