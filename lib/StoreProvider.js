import React, { PureComponent } from 'react';
import AppContext from 'AppContext';

const StoreProvider = (extraProps) => (Component) => {
  return class WithStore extends PureComponent {
    static displayName = `${Component.name}Container`;
    render() {
      return (
        <AppContext.Consumer>
          {({ store }) => (
            <Component
              {...this.props}
              {...extraProps(store, this.props)}
              store={store}
            />
          )}
        </AppContext.Consumer>
      );
    }
  };
};

export default StoreProvider;
