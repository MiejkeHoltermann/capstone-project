import styled from "styled-components";

export default function AddModal({ id, toggleDeleteModal, handleDeleteItem }) {
  return (
    <Modal>
      <p>Are you sure you want to delete this item?</p>
      <div>
        <StyledButton $red type="button" onClick={() => toggleDeleteModal()}>
          Cancel
        </StyledButton>
        <StyledButton type="button" onClick={() => handleDeleteItem(id)}>
          Yes
        </StyledButton>
      </div>
    </Modal>
  );
}

const Modal = styled.div`
  border: 1px solid darkgrey;
  box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  padding: 1rem;
  grid-area: 2/1/3/4;
  width: 100%;
  justify-self: center;
`;

const StyledButton = styled.button`
  font-size: 1rem;
  width: 4.8rem;
  height: 1.6rem;
  color: white;
  border: none;
  margin: 0.8rem 0.8rem 0 0;
  border-radius: 0.3rem;
  background-color: ${({ $red }) => ($red ? "var(--red)" : "var(--darkTeal)")};
`;
