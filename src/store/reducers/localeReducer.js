import { localeActions } from 'src/constants/store/actionTypes';

const initialState = {
  currLocale: 'en'
};

const localeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case localeActions.CHANGE_LOCALE_SUCCESS:
      return { currLocale: payload.locale };
    default:
      return state;
  }
};

export default localeReducer;
