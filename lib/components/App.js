import React, { Component } from 'react';
import axios from 'axios';

import ArticleList from './ArticleList';

import DataApi from 'state-api';

class App extends Component {
  state = {
    articles: this.props.initialData.articles,
    authors: this.props.initialData.authors
  };

  componentDidMount = async () => {
    const res = await axios.get('/data');
    const api = new DataApi(res.data);
    this.setState(() => ({
      articles: api.getArticles(),
      authors: api.getAuthors()
    }));
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
