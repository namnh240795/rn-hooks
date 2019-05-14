import { types } from 'src/types';

const initialState = {
  token: null
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.LOG_OUT:
      return { ...initialState };
    case types.SAVE_TOKEN:
      return { ...state, token: payload };
    default:
      return state;
  }
};

export { initialState, reducer };
