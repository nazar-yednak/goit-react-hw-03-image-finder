import React, { Component } from 'react';
import Modal from './Modal/Modal';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
// import { ReactComponent as Search } from './icons';
import 'react-toastify/dist/ReactToastify.css';
// import LoaderSpinner from './Loader/Loader ';
// import axios from 'axios';
class App extends Component {
  state = {
    // showModal: false,
    page: 1,
    searchName: '',
  };
  handelFormSubmit = searchName => {
    this.setState({
      searchName,
      page: 1,
    });
  };
  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { showModal, searchName } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handelFormSubmit} />
        <ImageGallery searchName={this.state.searchName} page={this.state.page}>
          <ImageGalleryItem />
          {searchName && <Button onLoad={this.loadMore} />}
        </ImageGallery>
        {searchName && <Button onLoad={this.loadMore} />}
        {showModal && <Modal onClose={this.toggleModal}></Modal>}
      </>
    );
  }
}

export default App;
