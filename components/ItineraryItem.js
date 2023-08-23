import styled from "styled-components";
import { FormatTime } from "@/components/utils";
import EditModal from "@/components/EditModal";
import DeleteModal from "@/components/DeleteModal";

export default function ItineraryItem({
  sight,
  sights,
  setSights,
  handleDeleteItem,
  handleUpdateItem,
}) {
  function toggleEditModal(name) {
    const updatedSights = sights.map((sight) =>
      sight.name === name
        ? { ...sight, editModal: !sight.editModal }
        : { ...sight }
    );
    setSights(updatedSights);
  }

  function toggleDeleteModal(name) {
    const updatedSights = sights.map((sight) =>
      sight.name === name
        ? { ...sight, deleteModal: !sight.deleteModal }
        : { ...sight }
    );
    setSights(updatedSights);
  }

  return (
    <>
      {!sight.editModal ? (
        <StyledItineraryItem>
          <StyledItineraryName onClick={() => toggleEditModal(sight.name)}>
            {sight.name}
          </StyledItineraryName>
          <StyledItineraryTime onClick={() => toggleEditModal(sight.name)}>
            {sight.plannedTime ? FormatTime(sight) : null}
          </StyledItineraryTime>
          <StyledDeleteButton onClick={() => toggleDeleteModal(sight.name)}>
            X
          </StyledDeleteButton>
          {sight.deleteModal === true ? (
            <DeleteModal
              sight={sight}
              toggleDeleteModal={toggleDeleteModal}
              handleDeleteItem={handleDeleteItem}
            />
          ) : null}
        </StyledItineraryItem>
      ) : (
        <EditModal
          sight={sight}
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
    transform: scale(1.1);
  }
`;

const StyledItineraryTime = styled.p`
  margin: 0;
  justify-self: end;
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
