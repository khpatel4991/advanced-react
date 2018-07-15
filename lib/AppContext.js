import { createContext } from 'react';

const AppContext = createContext({
  store: {
    lookupAuthor: () => {}
  }
});

export default AppContext;
