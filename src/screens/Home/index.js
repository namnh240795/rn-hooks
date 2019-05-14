import React, { useContext } from 'react';
import { View, Text } from 'react-native';
// import ThemeContext from 'src/contexts/ThemeContext';
import { AuthContext } from 'src/contexts/AuthContext';
import { types } from 'src/types';
// import { retrieveData } from 'src/helpers/asyncStorage';

const Home = () => {
  const { state, dispatch } = useContext(AuthContext);
  // dispatch({ type: types.SAVE_TOKEN, payload: 'asdfasbdfksadhfj' });
  // console.log('state', state);
  // retrieveData(types.SAVE_USER_INFO);

  return (
    <View>
      <Text
        onPress={() =>
          dispatch({
            type: types.SAVE_USER_INFO,
            payload: { token: '123456', username: 123456 }
          })
        }
      >
        Login
      </Text>
      <Text>Token is: {state.token}</Text>
    </View>
  );
};

export default Home;
