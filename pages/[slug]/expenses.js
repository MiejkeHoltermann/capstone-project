import styled from "styled-components";
import { uid } from "uid";
import { format } from "date-fns";
import Header from "@/components/Header";
import { CreateItinerary, SortSights } from "@/components/utils";
import { useRouter } from "next/router";
import Footer from "@/components/Footer";
import Lottie from "react-lottie-player";
import lottieJson from "../../public/loadingAnimation.json";
import ItineraryItem from "@/components/ItineraryItem";

export default function Expenses({ trips, setTrips }) {
  const router = useRouter();
  const currentTrip = trips.find((trip) => trip.slug === router.query.slug);
  if (!currentTrip) {
    return <StyledLottie loop animationData={lottieJson} play />;
  }

  function handleAddItem(event, date) {
    event.preventDefault();
    const name = event.target.expenseItem.value;
    const amount = event.target.amount.value;
    const formattedAmount = parseFloat(amount).toFixed(2);
    const index = trips.findIndex((trip) => trip.slug === currentTrip.slug);
    const updatedTrip = { ...trips[index] };
    updatedTrip.expenses.push({
      name: name,
      amount: formattedAmount,
      date: date,
      id: uid(),
    });
    const updatedTrips = [...trips];
    updatedTrips[index] = updatedTrip;
    setTrips(updatedTrips);
    event.target.reset();
  }

  function handleUpdateItem(event, id) {
    event.preventDefault();
    const updatedName = event.target.editedItem.value;
    const updatedAmount = event.target.editedAmount.value;
    const index = trips.findIndex((trip) => trip.slug === currentTrip.slug);
    const updatedTrip = currentTrip;
    updatedTrip.expenses = updatedTrip.expenses.map((expense) =>
      expense.id === id
        ? {
            ...expense,
            name: updatedName,
            amount: updatedAmount,
            editModal: !expense.editModal,
          }
        : expense
    );
    const updatedTrips = [...trips];
    updatedTrips[index] = updatedTrip;
    setTrips(updatedTrips);
  }

  function handleDeleteItem(id) {
    const index = trips.findIndex((trip) => trip.slug === currentTrip.slug);
    const updatedTrip = { ...trips[index] };
    updatedTrip.expenses = updatedTrip.expenses.filter(
      (expense) => expense.id !== id
    );
    const updatedTrips = [...trips];
    updatedTrips[index] = updatedTrip;
    setTrips(updatedTrips);
  }

  const datesArray = CreateItinerary(currentTrip);

  return (
    <>
      <Header
        name={currentTrip.name}
        image={currentTrip.image}
        startDate={currentTrip.startDate}
        endDate={currentTrip.endDate}
      />
      <StyledTitle>My Expenses</StyledTitle>
      <Scrollbox>
        <StyledExpenses>
          {datesArray.map((date) => (
            <StyledDay key={uid()}>
              <StyledDate>{format(date, "dd/MM/yy")}</StyledDate>
              {currentTrip.expenses.map(
                (expense) =>
                  expense.date === format(date, "yyyy-MM-dd") && (
                    <ItineraryItem
                      key={expense.id}
                      id={expense.id}
                      name={expense.name}
                      amount={expense.amount}
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
                <StyledLabel htmlFor="expenseInput">
                  Add Item:
                  <StyledInput
                    type="text"
                    id="expenseInput"
                    name="expenseItem"
                    placeholder="Add Item"
                    required
                    pattern="\S+"
                  ></StyledInput>
                </StyledLabel>
                <StyledLabel htmlFor="amount" className="amountInput">
                  Add amount:
                  <StyledInput
                    type="number"
                    min="-10000"
                    max="10000"
                    step="0.01"
                    id="amount"
                    name="amount"
                  ></StyledInput>
                </StyledLabel>
                <StyledButton type="submit">+</StyledButton>
              </StyledForm>
            </StyledDay>
          ))}
        </StyledExpenses>
      </Scrollbox>
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

const StyledTitle = styled.h1`
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

const StyledExpenses = styled.ul`
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
  &.amountInput {
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
