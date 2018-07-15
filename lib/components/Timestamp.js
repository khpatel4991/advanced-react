import React, { Component } from 'react';
import StoreProvider from 'StoreProvider';

class Timestamp extends Component {
  render() {
    return <div>Time: {this.props.timestamp.toString()}</div>;
  }
}

const extraProps = (store) => ({
  timestamp: store.getState().timestamp
});

export default StoreProvider(extraProps)(Timestamp);
