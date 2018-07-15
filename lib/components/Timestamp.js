import React, { Component } from 'react';
import StoreProvider from 'StoreProvider';

const timeDisplay = (timestamp) =>
  timestamp.toLocaleString(
    [],
    { hour: '2-digit', minute: '2-digit' }
  );

class Timestamp extends Component {
  shouldComponentUpdate = (nextProps) => {
    const currTimeDisplay = timeDisplay(this.props.timestamp);
    const nextTimeDisplay = timeDisplay(nextProps.timestamp);
    if (currTimeDisplay !== nextTimeDisplay) {
      return true;
    }
    return false;
  };

  render() {
    return (
      <div>
        Time:{' '}
        {this.props.timestamp.toLocaleString(
          [],
          { hour: '2-digit', minute: '2-digit' }
        )}
      </div>
    );
  }
}

const extraProps = (store) => ({
  timestamp: store.getState().timestamp
});

export default StoreProvider(extraProps)(Timestamp);
