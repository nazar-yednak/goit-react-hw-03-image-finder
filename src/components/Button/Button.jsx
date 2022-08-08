import React, { Component } from 'react';
import { ButtonLoadMore, ButtonContainer } from './Button.styled';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    return (
      <ButtonContainer>
        <ButtonLoadMore type="button" onClick={this.props.onLoad}>
          Load more
        </ButtonLoadMore>
      </ButtonContainer>
    );
  }
}
export default Button;
Button.propTypes = {
  onClick: PropTypes.func,
};
