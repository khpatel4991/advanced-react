import React, { Component } from 'react';
import ArticleList from './ArticleList';

class App extends Component {
  state = {
    articles: this.props.initialData.articles,
    authors: this.props.initialData.authors
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
