import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import Routes from 'src/routes';
import { AuthProvider, AuthContext } from 'src/contexts/AuthContext';
import ThemeContext from 'src/contexts/ThemeContext';

// const storeData = async () => {
//   try {
//     console.log('store data');

//     await AsyncStorage.setItem('token', 'I like to save it.');
//   } catch (error) {
//     console.log('eror', error);
//     // Error saving data
//   }
// };

// const retrieveData = async () => {
//   try {
//     const value = await AsyncStorage.getItem('token');
//     console.log('value', value);

//     if (value !== null) {
//       // We have data!!
//       console.log('vl', value);
//     }
//   } catch (error) {
//     console.log('eror', error);

//     // Error retrieving data
//   }
// };

const App = () => {
  // storeData();
  // retrieveData();
  return (
    // <ThemeContext.Provider value={{}}>
    <AuthProvider>
      <Routes />
    </AuthProvider>
    // </ThemeContext.Provider>
  );
};

export default App;
