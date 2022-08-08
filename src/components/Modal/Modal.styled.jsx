import styled from 'styled-components';

export const ModalBackDrop = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
`;
export const ModalContent = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;
