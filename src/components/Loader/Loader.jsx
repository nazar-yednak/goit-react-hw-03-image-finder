import React, { Component } from 'react';
import { Loader } from './Loader.styled';
import { TailSpin } from 'react-loader-spinner';

class LoaderSpinner extends Component {
  render() {
    return (
      <Loader>
        <TailSpin color="#00BFFF" height={100} width={100} />
      </Loader>
    );
  }
}
export default LoaderSpinner;
