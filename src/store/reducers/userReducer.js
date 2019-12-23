import { userActions } from 'src/constants/store/actionTypes';

const initialState = {
  userData: {
    isAuthenticated: false,
    displayName: null,
    email: null,
    idToken: null,
    expiryDate: null
  },
  requestInProgress: false,
  error: null
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case userActions.AUTH_USER:
      return {
        ...state,
        requestInProgress: true
      };
    case userActions.AUTH_USER_SUCCESS:
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
        requestInProgress: false
      };
    case userActions.AUTH_USER_ERROR:
      return {
        ...state,
        requestInProgress: false,
        error: payload.error
      };
    case userActions.LOG_OUT:
      return initialState;
    default:
      return state;
  }
};

export default userReducer;
