import React, { Component } from 'react';
import AppContext from 'AppContext';

const StoreProvider = (extraProps) => (BaseComponent) => {
  return class WithStore extends Component {
    static displayName = `${BaseComponent.name}Container`;
    render() {
      return (
        <AppContext.Consumer>
          {({ store }) => (
            <BaseComponent {...this.props} {...extraProps} store={store} />
          )}
        </AppContext.Consumer>
      );
    }
  };
};

export default StoreProvider;
