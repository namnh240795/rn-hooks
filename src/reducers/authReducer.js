import { types } from 'src/types';
import { storeData } from 'src/helpers/asyncStorage';

const initialState = {
  token: null
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.LOG_OUT:
      return { ...initialState };
    case types.SAVE_USER_INFO: {
      const data = { ...state, ...payload };
      storeData(types.SAVE_USER_INFO, data);
      return { ...data };
    }
    default:
      return state;
  }
};

export { initialState, reducer };
