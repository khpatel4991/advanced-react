import React, { PureComponent } from 'react';
import debounce from 'lodash/debounce';
import StoreProvider from '../StoreProvider';

class SearchBar extends PureComponent {
  state = {
    searchTerm: ''
  };

  componentDidUpdate = (prevProps, prevState) => {
    console.info('cdu search bar');
  };

  doSearch = debounce(() => {
    this.props.store.setSearchTerm(this.state.searchTerm);
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

export default StoreProvider()(SearchBar);
