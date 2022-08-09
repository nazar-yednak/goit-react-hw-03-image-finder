import React, { Component } from 'react';
import { ImageGalleryStyle } from './ImageGallery.styled';
// import LoaderSpinner from '../Loader/Loader';
// import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

import PropTypes from 'prop-types';

class ImageGallery extends Component {
  render() {
    return (
      <>
        <ImageGalleryStyle>{this.props.children}</ImageGalleryStyle>
      </>
    );
  }
}
export default ImageGallery;
ImageGallery.propTypes = {
  searchName: PropTypes.string,
  page: PropTypes.number,
};
