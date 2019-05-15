import React, { useReducer, useEffect } from 'react';
import { reducer, initialState } from 'src/reducers/authReducer';
import { retrieveData } from 'src/helpers/asyncStorage';
import { types } from 'src/types';
// import { isRefreshTokenExpired, isTokenExpired } from 'src/helpers/auth';

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const rehydrate = async () => {
    const userInfo = await retrieveData(types.SAVE_USER_INFO);
    dispatch({ type: types.SAVE_USER_INFO, payload: userInfo });
  };

  useEffect(() => {
    rehydrate();
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
