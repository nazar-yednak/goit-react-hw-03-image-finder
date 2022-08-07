import React, { Component } from 'react';
import { createPortal } from 'react-dom';
// import { ThreeDots } from 'react-loader-spinner';
import { ModalBackDrop, ModalContent } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        this.props.onClose(e);
        console.log('closed esc');
      }
    });
  }
  render() {
    return createPortal(
      <ModalBackDrop>
        <ModalContent>{this.props.children}</ModalContent>
      </ModalBackDrop>,
      modalRoot
    );
  }
}

//  <ThreeDots color="#00BFFF" height={80} width={80} />;
export default Modal;
