import styled from "styled-components";
import Image from "next/image";
import AddModal from "@/components/AddModal";
import { Fragment } from "react";

export default function Carousel({ handleSortItem, trips, sights, setSights }) {
  function toggleAddModal(id) {
    const updatedSights = sights.map((sight) =>
      sight.id === id
        ? { ...sight, addModal: !sight.addModal }
        : { ...sight, addModal: false }
    );
    setSights(updatedSights);
  }
  return (
    <>
      <StyledSection>
        {sights
          .filter(
            (sight) => sight.inItinerary === true && sight.plannedDate === ""
          )
          .map((sight) => (
            <Fragment key={sight.id}>
              <StyledImage
                src={sight.image}
                height={40}
                width={40}
                alt={sight.name}
                id={sight.name}
                onClick={() => toggleAddModal(sight.id)}
              />
            </Fragment>
          ))}
      </StyledSection>
      {sights.map((sight) =>
        sight.addModal ? (
          <AddModal
            key={sight.id}
            sight={sight}
            trips={trips}
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
