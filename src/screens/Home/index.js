import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import ThemeContext from 'src/contexts/ThemeContext';
import { AuthContext } from 'src/contexts/AuthContext';
import { types } from 'src/types';

const Home = () => {
  const { state, dispatch } = useContext(AuthContext);
  // dispatch({ type: types.SAVE_TOKEN, payload: 'asdfasbdfksadhfj' });
  return (
    <View>
      <Text
        onPress={() => dispatch({ type: types.SAVE_TOKEN, payload: 'token' })}
      >
        Login
      </Text>
      <Text>Token is: {state.token}</Text>
    </View>
  );
};

export default Home;
