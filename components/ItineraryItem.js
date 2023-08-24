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
  function toggleEditModal(id) {
    const updatedSights = sights.map((sight) =>
      sight.id === id
        ? { ...sight, editModal: !sight.editModal }
        : { ...sight, editModal: false, deleteModal: false }
    );
    setSights(updatedSights);
  }

  function toggleDeleteModal(id) {
    const updatedSights = sights.map((sight) =>
      sight.id === id
        ? { ...sight, deleteModal: !sight.deleteModal }
        : { ...sight, editModal: false, deleteModal: false }
    );
    setSights(updatedSights);
  }

  return (
    <>
      {!sight.editModal ? (
        <StyledItineraryItem>
          <StyledItineraryName onClick={() => toggleEditModal(sight.id)}>
            {sight.name}
          </StyledItineraryName>
          <StyledItineraryTime onClick={() => toggleEditModal(sight.id)}>
            {sight.plannedTime ? FormatTime(sight) : null}
          </StyledItineraryTime>
          <StyledDeleteButton onClick={() => toggleDeleteModal(sight.id)}>
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
