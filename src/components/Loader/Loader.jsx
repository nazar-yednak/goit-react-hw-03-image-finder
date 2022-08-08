import React, { Component } from 'react';
import { Loader } from './Loader.styled';
import { TailSpin } from 'react-loader-spinner';

class LoaderSpinner extends Component {
  render() {
    return (
      <Loader>
        <TailSpin color="#00BFFF" height={200} width={200} />
      </Loader>
    );
  }
}
export default LoaderSpinner;
