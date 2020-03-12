import { userActionTypes } from 'src/constants/actionTypes';

export function authenticateUser(email, password) {
  return {
    type: userActionTypes.AUTH_USER,
    payload: { email, password }
  };
}

export const authenticateUserSuccess = (displayName, email, idToken, expiryDate) => {
  return {
    type: userActionTypes.AUTH_USER_SUCCESS,
    payload: { displayName, email, idToken, expiryDate }
  };
};

export const authenticateUserError = error => {
  return {
    type: userActionTypes.AUTH_USER_ERROR,
    payload: { error }
  };
};

export const logout = () => {
  return {
    type: userActionTypes.LOG_OUT,
    payload: {}
  };
};
