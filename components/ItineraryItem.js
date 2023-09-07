import styled from "styled-components";
import { FormatTime } from "@/components/utils";
import EditModal from "@/components/EditModal";
import DeleteModal from "@/components/DeleteModal";
import { useState } from "react";

export default function ItineraryItem({
  id,
  name,
  plannedTime,
  amount,
  handleDeleteItem,
  handleUpdateItem,
}) {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  function toggleEditModal() {
    setEditModalOpen(!editModalOpen);
    setDeleteModalOpen(false);
  }

  function toggleDeleteModal() {
    setDeleteModalOpen(!deleteModalOpen);
    setEditModalOpen(false);
  }

  return (
    <>
      {!editModalOpen ? (
        <StyledItineraryItem>
          <StyledItineraryName onClick={() => toggleEditModal()}>
            {name}
          </StyledItineraryName>
          {amount ? (
            <StyledAmount onClick={() => toggleEditModal()}>
              {amount} €
            </StyledAmount>
          ) : (
            <StyledItineraryTime onClick={() => toggleEditModal()}>
              {plannedTime ? FormatTime(plannedTime) : null}
            </StyledItineraryTime>
          )}
          <StyledDeleteButton onClick={() => toggleDeleteModal()}>
            X
          </StyledDeleteButton>
          {deleteModalOpen && (
            <DeleteModal
              id={id}
              toggleDeleteModal={toggleDeleteModal}
              handleDeleteItem={handleDeleteItem}
            />
          )}
        </StyledItineraryItem>
      ) : (
        <EditModal
          id={id}
          name={name}
          plannedTime={plannedTime}
          amount={amount}
          handleUpdateItem={handleUpdateItem}
          toggleEditModal={toggleEditModal}
        />
      )}
    </>
  );
}

const StyledItineraryItem = styled.div`
  margin: 0.2rem 0.6rem;
  display: grid;
  grid-template-columns: 5fr 4fr 1fr;
  gap: 10px;
`;

const StyledItineraryName = styled.p`
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  &:hover {
    cursor: pointer;
    color: #934d29;
  }
`;

const StyledItineraryTime = styled.p`
  margin: 0;
  justify-self: end;
  &:hover {
    cursor: pointer;
    color: #934d29;
  }
`;

const StyledAmount = styled.p`
  margin: 0;
  justify-self: end;
  &:hover {
    cursor: pointer;
    color: #934d29;
  }
`;

const StyledDeleteButton = styled.button`
  justify-self: end;
  color: white;
  background-color: #934d29;
  border: none;
  border-radius: 0.3rem;
  width: 20px;
  height: 20px;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
