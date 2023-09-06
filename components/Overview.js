import styled from "styled-components";
import Image from "next/image";
import AddModal from "@/components/AddModal";

export default function Overview({
  handleSortItem,
  trips,
  trip,
  sights,
  setSights,
}) {
  function toggleAddModal(id) {
    const updatedSights = sights.map((sight) =>
      sight.id === id
        ? { ...sight, addModal: !sight.addModal }
        : { ...sight, addModal: false }
    );
    setSights(updatedSights);
  }
  const filteredSights = sights.filter(
    (sight) => sight.inItinerary && sight.plannedDate === ""
  );
  return (
    <>
      {filteredSights.length !== 0 && (
        <StyledSection>
          {filteredSights.map((sight) => (
            <StyledImage
              key={sight.id}
              src={sight.image}
              height={40}
              width={40}
              alt={sight.name}
              id={sight.name}
              onClick={() => toggleAddModal(sight.id)}
            />
          ))}
        </StyledSection>
      )}
      {sights.map((sight) =>
        sight.addModal ? (
          <AddModal
            key={sight.id}
            sight={sight}
            trips={trips}
            trip={trip}
            toggleAddModal={toggleAddModal}
            handleSortItem={handleSortItem}
          />
        ) : null
      )}
    </>
  );
}
const StyledSection = styled.section`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  overflow: hidden;
  width: 270px;
  height: 40px;
  gap: 6px;
`;

const StyledImage = styled(Image)`
  border-radius: 0.3rem;
  height: 40px;
  width: 40px;
  object-fit: cover;
`;
