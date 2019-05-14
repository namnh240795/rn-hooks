import React, { useReducer } from 'react';
import { reducer, initialState } from 'src/reducers/authReducer';

const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
