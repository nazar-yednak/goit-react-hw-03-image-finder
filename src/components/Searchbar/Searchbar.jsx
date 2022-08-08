import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Search from '../Icon';
import {
  SearchbarStyled,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';

class Searchbar extends Component {
  state = {
    searchName: '',
    page: 1,
  };
  handleNameChange = event => {
    this.setState({ searchName: event.currentTarget.value.toLowerCase() });
  };
  handleSubmit = event => {
    event.preventDefault();
    if (this.state.searchName.trim() === '') {
      alert('Введіть назву');
      return;
    }
    this.props.onSubmit(this.state.searchName, this.state.page);
    this.setState({ searchName: '' });
  };
  render() {
    return (
      <SearchbarStyled>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <Search />
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            type="text"
            name="searchName"
            value={this.state.searchName}
            onChange={this.handleNameChange}
            autocomplete="off"
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchbarStyled>
    );
  }
}

export default Searchbar;
Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
