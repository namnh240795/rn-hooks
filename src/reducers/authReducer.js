import { types } from 'src/types';
import { storeData } from 'src/helpers/asyncStorage';

const initialState = {
  token: null
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.LOG_OUT:
      return { ...initialState };
    case types.SAVE_USER_INFO:
      console.log('payload', payload);

      storeData(types.SAVE_USER_INFO, payload);
      return { ...state, ...payload };
    default:
      return state;
  }
};

export { initialState, reducer };
