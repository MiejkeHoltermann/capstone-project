import styled from "styled-components";

export default function AddModal({
  sight,
  toggleDeleteModal,
  handleDeleteItem,
}) {
  return (
    <Modal>
      <StyledText>Are you sure you want to delete this item?</StyledText>
      <div>
        <StyledButton
          type="button"
          className="red"
          onClick={() => toggleDeleteModal(sight.id)}
        >
          Cancel
        </StyledButton>
        <StyledButton
          type="button"
          className="green"
          onClick={() => handleDeleteItem(sight.id)}
        >
          Yes
        </StyledButton>
      </div>
    </Modal>
  );
}

const Modal = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.3);
  border-radius: 0.6rem;
  padding: 10px;
  grid-area: 2/1/3/4;
`;

const StyledText = styled.p`
  margin: 0;
`;

const StyledButton = styled.button`
  width: 4rem;
  height: 1.4rem;
  color: white;
  border: none;
  margin: 0.6rem 0.6rem 0 0;
  border-radius: 0.3rem;
  &.red {
    background-color: #934d29;
  }
  &.green {
    background-color: teal;
  }
`;
