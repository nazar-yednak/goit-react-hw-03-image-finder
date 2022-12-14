import React, { Component } from 'react';
import { GalleryItemImage, ItemImage } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';
class ImageGalleryItem extends Component {
  render() {
    const { imageArray, onOpenModal } = this.props;
    return (
      <>
        {imageArray.map(item => (
          <GalleryItemImage key={item.id} onClick={() => onOpenModal(item)}>
            <ItemImage src={item.webformatURL} alt={item.tags} id={item.id} />
          </GalleryItemImage>
        ))}
      </>
    );
  }
}
export default ImageGalleryItem;
ImageGalleryItem.propTypes = {
  imageArray: PropTypes.array,
  onOpenModal: PropTypes.func,
};
