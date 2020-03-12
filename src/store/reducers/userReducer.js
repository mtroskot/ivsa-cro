import { userActionTypes } from 'src/constants/actionTypes';

export const initialState = {
  userData: {
    isAuthenticated: false,
    displayName: null,
    email: null,
    idToken: null,
    expiryDate: null
  },
  error: null
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case userActionTypes.AUTH_USER_SUCCESS:
      const { displayName, email, idToken, expiryDate } = payload;
      return {
        ...state,
        userData: {
          isAuthenticated: true,
          displayName,
          email,
          idToken,
          expiryDate
        },
        error: null
      };
    case userActionTypes.AUTH_USER_ERROR:
      return {
        ...state,
        error: payload.error
      };
    case userActionTypes.LOG_OUT:
      return initialState;
    default:
      return state;
  }
};

export default userReducer;
