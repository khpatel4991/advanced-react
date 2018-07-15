import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Index extends Component {
  state = {
    answer: 42
  };

  componentDidMount = async () => {
    this.setState({
      answer: await this.myAnswer()
    });
  };

  myAnswer = async () => {
    return Promise.resolve(13);
  };

  render() {
    return <h2>Hello React. Answer to all Universe -- {this.state.answer}</h2>;
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
