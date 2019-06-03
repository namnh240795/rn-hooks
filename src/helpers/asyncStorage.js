import AsyncStorage from '@react-native-community/async-storage';

const storeData = async (key, item) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(item));
  } catch (error) {
    // Error saving data
  }
};

const removeData = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    // error remove data
  }
};

const retrieveData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    return JSON.parse(value);
  } catch (error) {
    console.log('error', error);

    // Error retrieving data
  }
};

export { storeData, retrieveData, removeData };
