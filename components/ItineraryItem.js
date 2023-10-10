import styled from "styled-components";
import { useState } from "react";
import Image from "next/image";
import EditModal from "@/components/EditModal";
import DeleteModal from "@/components/DeleteModal";
import { FormatTime } from "@/components/utils";

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
          <StyledText className="name" onClick={() => toggleEditModal()}>
            {name}
          </StyledText>
          {amount ? (
            <StyledText onClick={() => toggleEditModal()}>
              {amount} €
            </StyledText>
          ) : plannedTime ? (
            <StyledText onClick={() => toggleEditModal()}>
              {plannedTime ? FormatTime(plannedTime) : null}
            </StyledText>
          ) : (
            <p />
          )}
          <StyledDeleteButton onClick={() => toggleDeleteModal()}>
            <Image
              src="/cross.svg"
              width={18}
              height={18}
              alt="delete button"
            />
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
  margin: 0 0.6rem;
  display: grid;
  width: 90%;
  grid-template-columns: 5fr 4fr 1fr;
  gap: 10px;
`;

const StyledText = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  justify-self: end;
  &.name {
    width: 100%;
  }
  &:hover {
    cursor: pointer;
    color: var(--red);
  }
`;

const StyledDeleteButton = styled.button`
  justify-self: end;
  color: white;
  background-color: var(--red);
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 0.2rem;
  width: 1.4rem;
  height: 1.4rem;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
