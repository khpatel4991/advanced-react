import React, { Component } from 'react';
import ArticleList from 'components/ArticleList';
import AppContext from 'AppContext';

class App extends Component {
  state = this.props.store.getState();

  render() {
    const { store } = this.props;
    const { articles } = this.state;
    return (
      <AppContext.Provider value={{ store }}>
        <ArticleList articles={articles} />
      </AppContext.Provider>
    );
  }
}
export default App;
