import React, { Component } from 'react';
import Modal from './Modal/Modal';

class App extends Component {
  state = {
    showModal: false,
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    return (
      <>
        <button type="button" onClick={this.toggleModal}>
          open modal
        </button>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <h1>Привіт це контент модалки як дитина</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. At
              voluptas perferendis, itaque dignissimos aliquid nobis temporibus
              quidem recusandae tempore voluptatibus id, ut atque a, harum sed
              dolore illum quia aperiam.
            </p>
            <button type="button" onClick={this.toggleModal}>
              close modal
            </button>
          </Modal>
        )}
      </>
    );
  }
}

export default App;
