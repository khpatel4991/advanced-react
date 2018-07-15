import React, { Component } from 'react';

import ArticleList from './ArticleList';

import DataApi from 'state-api';
import { data } from '../testData';

const api = new DataApi(data);

class App extends Component {
  state = {
    articles: api.getArticles(),
    authors: api.getAuthors()
  };

  articleActions = {
    lookupAuthor: (authorId) => this.state.authors[authorId]
  };

  render() {
    const { articles } = this.state;
    return (
      <ArticleList articles={articles} articleActions={this.articleActions} />
    );
  }
}
export default App;
