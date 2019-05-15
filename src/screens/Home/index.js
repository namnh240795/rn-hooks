import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { AuthContext } from 'src/contexts/AuthContext';
import { types } from 'src/types';
// import { useApi } from 'src/hooks/useApi';

const Home = () => {
  const { state, dispatch } = useContext(AuthContext);
  // const {} = useApi('/api/users', {});

  return (
    <View>
      <Text
        onPress={() =>
          dispatch({
            type: types.SAVE_USER_INFO,
            payload: { token: '123452226', username: 123456 }
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
