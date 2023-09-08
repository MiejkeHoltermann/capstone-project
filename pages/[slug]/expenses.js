import styled from "styled-components";
import { useRouter } from "next/router";
import { uid } from "uid";
import { format } from "date-fns";
import { CreateItinerary, SortSights } from "@/components/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ItineraryItem from "@/components/ItineraryItem";
import AddButton from "@/components/AddButton";
import Lottie from "react-lottie-player";
import lottieJson from "../../public/loadingAnimation.json";

export default function Expenses({ trips, setTrips }) {
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
      <h1 className="title">My Expenses</h1>
      <StyledMain className="mainContent">
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
                  <StyledItemInput
                    type="text"
                    id="expenseInput"
                    name="expenseItem"
                    placeholder="Add Item"
                    maxLength="100"
                    required
                    pattern=".*\S+.*"
                    className="lowkeyInput"
                  ></StyledItemInput>
                </StyledLabel>
                <StyledLabel htmlFor="amount" className="amountInput">
                  Add amount:
                  <StyledAmountInput
                    type="number"
                    min="-10000"
                    max="10000"
                    step="0.01"
                    required
                    id="amount"
                    name="amount"
                    className="lowkeyInput"
                  ></StyledAmountInput>
                </StyledLabel>
                <AddButton />
              </StyledForm>
            </StyledDay>
          ))}
        </StyledExpenses>
      </StyledMain>
      <Footer url={`/${currentTrip.slug}`} linkText="Overview" />
    </>
  );
}

const StyledMain = styled.main`
  margin: 19rem 0 7rem 0;
`;

const StyledExpenses = styled.ul`
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
  border-radius: 0.5rem;
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
  width: 90%;
  margin-top: 0.8rem;
  display: flex;
  justify-content: space-between;
`;

const StyledLabel = styled.label`
  font-size: 0;
  &.amountInput {
    justify-self: end;
  }
`;

const StyledItemInput = styled.input`
  width: 7rem;
  color: darkgrey;
`;

const StyledAmountInput = styled.input`
  width: 7rem;
  color: darkgrey;
`;
