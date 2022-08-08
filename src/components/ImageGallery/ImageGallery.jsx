import React, { Component } from 'react';
import { ImageGalleryStyle } from './ImageGallery.styled';
import LoaderSpinner from '../Loader/Loader';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import fetchImage from 'components/API/Api';
import Modal from 'components/Modal/Modal';
import PropTypes from 'prop-types';

class ImageGallery extends Component {
  state = {
    imageArray: [],
    largeImageURL: '',
    largeImageTags: '',
    loading: false,
    showModal: false,
  };

  async componentDidUpdate(prevProps) {
    if (
      prevProps.searchName !== this.props.searchName ||
      prevProps.page !== this.props.page
    ) {
      this.setState({ loading: true });
      try {
        const imageArray = await fetchImage(
          this.props.searchName,
          this.props.page
        );

        this.setState({
          imageArray,
        });
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
  render() {
    const { imageArray, showModal } = this.state;
    return (
      <>
        {this.state.loading && <LoaderSpinner />}
        <ImageGalleryStyle>
          <ImageGalleryItem
            imageArray={imageArray}
            onOpenModal={this.toggleModal}
          />
        </ImageGalleryStyle>

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
export default ImageGallery;
ImageGallery.propTypes = {
  searchName: PropTypes.string,
  page: PropTypes.number,
};
