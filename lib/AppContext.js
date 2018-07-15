import { createContext } from 'react';

const AppContext = createContext({
  store: {
    subscribe: () => {},
    unsubscribe: () => {},
    setSearchTerm: () => {},
    lookupAuthor: () => {}
  }
});

export default AppContext;
