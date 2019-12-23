import { userActions } from 'src/constants/store/actionTypes';

export function authenticateUser(email, password) {
  return {
    type: userActions.AUTH_USER,
    payload: { email, password }
  };
}

export const authenticateUserSuccess = (displayName, email, idToken, expiryDate) => {
  return {
    type: userActions.AUTH_USER_SUCCESS,
    payload: { displayName, email, idToken, expiryDate }
  };
};

export const authenticateUserError = error => {
  return {
    type: userActions.AUTH_USER_ERROR,
    payload: { error }
  };
};

export const logout = () => {
  return {
    type: userActions.LOG_OUT,
    payload: {}
  };
};
