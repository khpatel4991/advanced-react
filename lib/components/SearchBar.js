import React, { Component } from 'react';
import debounce from 'lodash/debounce';

class SearchBar extends Component {
  state = {
    searchTerm: ''
  };

  doSearch = debounce(() => {
    this.props.doSearch(this.state.searchTerm);
  }, 300);

  handleSearch = (e) => {
    e.persist();
    e.stopPropagation();
    this.setState(
      () => ({
        searchTerm: e.target.value
      }),
      () => {
        this.doSearch();
      }
    );
  };

  render() {
    const { searchTerm } = this.state;
    return (
      <input
        value={searchTerm}
        type="search"
        placeholder="Enter Search Term"
        onChange={this.handleSearch}
      />
    );
  }
}

export default SearchBar;
