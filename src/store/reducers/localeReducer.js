import { localeActionTypes } from 'src/constants/actionTypes';

export const initialState = {
  currLocale: 'en'
};

const localeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case localeActionTypes.CHANGE_LOCALE_SUCCESS:
      return {
        ...state,
        currLocale: payload.locale
      };
    default:
      return state;
  }
};

export default localeReducer;
