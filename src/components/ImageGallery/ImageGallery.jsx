import React, { Component } from 'react';
import { ImageGalleryStyle } from './ImageGallery.styled';
import LoaderSpinner from '../Loader/Loader';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import fetchImage from 'Api/Api';
import Modal from 'components/Modal/Modal';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

class ImageGallery extends Component {
  state = {
    imageArray: [],
    largeImageURL: '',
    largeImageTags: '',
    loading: false,
    showModal: false,
    page: 1,
  };

  async componentDidUpdate(prevProps) {
    const { searchName, page } = this.props;
    if (prevProps.searchName !== searchName) {
      this.setState({ loading: true });
      try {
        const imageArray = await fetchImage(searchName, page);
        this.setState(prevState => ({
          imageArray: imageArray,
        }));
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ loading: false });
      }
    }

    if (prevProps.page !== page) {
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

  render() {
    const { imageArray, showModal, loading } = this.state;
    // console.log(this.prevProps.imageArray);
    return (
      <>
        <ImageGalleryStyle>
          <ImageGalleryItem
            imageArray={imageArray}
            onOpenModal={this.toggleModal}
          />
        </ImageGalleryStyle>
        {loading && <LoaderSpinner />}
        {imageArray.length > 0 && !loading ? (
          <Button onLoad={this.props.onLoad} />
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
export default ImageGallery;
ImageGallery.propTypes = {
  searchName: PropTypes.string,
  page: PropTypes.number,
};
