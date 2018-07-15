import React, { Component } from 'react';
import pickBy from 'lodash/pickBy';

import AppContext from 'AppContext';

import ArticleList from 'components/ArticleList';
import SearchBar from 'components/SearchBar';
import Timestamp from 'components/Timestamp';

class App extends Component {
  state = this.props.store.getState();

  onStoreChange = () => {
    this.setState(() => this.props.store.getState());
  };

  componentDidMount = () => {
    this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
    this.props.store.startClock();
  };

  componentWillUnmount = () => {
    this.props.store.unsubscribe(this.subscriptionId);
  };

  render() {
    const { store } = this.props;
    let { articles } = this.state;
    const { searchTerm } = this.state;
    if (searchTerm) {
      articles = pickBy(articles, (article) => {
        return (
          article.title.match(searchTerm) || article.body.match(searchTerm)
        );
      });
    }
    return (
      <AppContext.Provider value={{ store }}>
        <Timestamp />
        <SearchBar doSearch={store.setSearchTerm} />
        <ArticleList articles={articles} />
      </AppContext.Provider>
    );
  }
}
export default App;
