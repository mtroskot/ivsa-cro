import configureStore from 'redux-mock-store';
import * as userActions from 'src/store/actions/userActions';
import { userActionTypes } from 'src/constants/actionTypes';

const middlewares = [];
const mockStore = configureStore(middlewares);
// Initialize mockstore with empty state
const initialState = {};
const store = mockStore(initialState);

describe('User actions tests', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('dispatches authenticateUser action', () => {
    const email = 'email';
    const password = 'password';
    const expectedActions = [
      {
        type: userActionTypes.AUTH_USER,
        payload: { email, password }
      }
    ];
    store.dispatch(userActions.authenticateUser(email, password));
    expect(store.getActions()).toEqual(expectedActions);
    expect(store.getActions()).toMatchSnapshot();
  });

  it('dispatches authenticateUserSuccess action', () => {
    const displayName = 'displayName';
    const email = 'email';
    const idToken = 'idToken';
    const expiryDate = 'expiryDate';
    const expectedActions = [
      {
        type: userActionTypes.AUTH_USER_SUCCESS,
        payload: { displayName, email, idToken, expiryDate }
      }
    ];
    store.dispatch(userActions.authenticateUserSuccess(displayName, email, idToken, expiryDate));
    expect(store.getActions()).toEqual(expectedActions);
    expect(store.getActions()).toMatchSnapshot();
  });
  it('dispatches authenticateUserError action', () => {
    const error = 'error';
    const expectedActions = [
      {
        type: userActionTypes.AUTH_USER_ERROR,
        payload: { error }
      }
    ];
    store.dispatch(userActions.authenticateUserError(error));
    expect(store.getActions()).toEqual(expectedActions);
    expect(store.getActions()).toMatchSnapshot();
  });
  it('dispatches logout action', () => {
    const expectedActions = [
      {
        type: userActionTypes.LOG_OUT,
        payload: {}
      }
    ];
    store.dispatch(userActions.logout());
    expect(store.getActions()).toEqual(expectedActions);
    expect(store.getActions()).toMatchSnapshot();
  });
});
