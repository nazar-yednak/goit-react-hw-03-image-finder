import styled from 'styled-components';

export const ModalBackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;
export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 300px;
  max-width: 600px;
  width: 100%;
  background-color: #fff;
  border-radius: 3px;
  padding: 12px;
  box-shadow: 0px, 2px, 1px, -1px rgba(0, 0, 0, 0.12),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;
