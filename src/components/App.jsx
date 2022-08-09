import React, { Component } from 'react';
import Modal from './Modal/Modal';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import fetchImage from 'Api/Api';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import LoaderSpinner from './Loader/Loader';
import Button from './Button/Button';
// import { ReactComponent as Search } from './icons';
import 'react-toastify/dist/ReactToastify.css';
// import LoaderSpinner from './Loader/Loader ';
// import axios from 'axios';
class App extends Component {
  state = {
    imageArray: [],
    largeImageURL: '',
    largeImageTags: '',
    loading: false,
    showModal: false,
    page: 1,
    searchName: '',
  };

  async componentDidUpdate(prevProps, prevState) {
    const { searchName } = this.state;
    const { page } = this.state;

    if (prevState.page !== page || prevState.searchName !== searchName) {
      this.setState({ loading: true });
      try {
        const imageArray = await fetchImage(searchName, page);
        this.setState(prevState => ({
          imageArray: [...prevState.imageArray, ...imageArray],
        }));
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ loading: false });
      }
    }
  }
  closeModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };
  toggleModal = item => {
    this.setState(state => ({
      showModal: !state.showModal,

      largeImageURL: item.largeImageURL,
      largeImageTags: item.tags,
    }));
  };

  handelFormSubmit = searchName => {
    this.setState({
      searchName,
      page: 1,
      imageArray: [],
    });
  };
  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { showModal, searchName, page, loading, imageArray } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handelFormSubmit} />
        <ImageGallery>
          <ImageGalleryItem
            searchName={searchName}
            page={page}
            imageArray={imageArray}
            onOpenModal={this.toggleModal}
          />
        </ImageGallery>
        {loading && <LoaderSpinner />}
        {this.state.imageArray.length > 0 && !loading ? (
          <Button onLoad={this.loadMore} />
        ) : null}
        {showModal && (
          <Modal onClose={this.closeModal}>
            <img
              src={this.state.largeImageURL}
              alt={this.state.largeImageTags}
            />
          </Modal>
        )}
      </>
    );
  }
}

export default App;
