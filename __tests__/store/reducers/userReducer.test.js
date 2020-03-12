import userReducer, { initialState } from 'src/store/reducers/userReducer';
import * as userActions from 'src/store/actions/userActions';

describe('INITIAL_STATE', () => {
  const beforeActionState = initialState;

  it('1returns initial state', () => {
    const action = { type: 'dummy_action' };
    const expectedState = beforeActionState;
    expect(userReducer(beforeActionState, action)).toEqual(expectedState);
    expect(userReducer(beforeActionState, action)).toMatchSnapshot();
  });

  it('2returns authenticateUserSuccess state', () => {
    const displayName = 'displayName';
    const email = 'email';
    const idToken = 'idToken';
    const expiryDate = 'expiryDate';
    const startAction = userActions.authenticateUserSuccess(displayName, email, idToken, expiryDate);
    const expectedState = {
      userData: {
        isAuthenticated: true,
        displayName,
        email,
        idToken,
        expiryDate
      },
      error: null
    };
    expect(userReducer(beforeActionState, startAction)).toEqual(expectedState);
    expect(userReducer(beforeActionState, startAction)).toMatchSnapshot();
  });

  it('3returns authenticateUserError state', () => {
    const error = 'error';
    const stopAction = userActions.authenticateUserError(error);
    const expectedState = {
      userData: {
        isAuthenticated: false,
        displayName: null,
        email: null,
        idToken: null,
        expiryDate: null
      },
      error
    };
    expect(userReducer(beforeActionState, stopAction)).toEqual(expectedState);
    expect(userReducer(beforeActionState, stopAction)).toMatchSnapshot();
  });

  it('4returns logout state', () => {
    const refreshActionStart = userActions.logout();
    const expectedState = initialState;
    expect(userReducer(beforeActionState, refreshActionStart)).toEqual(expectedState);
    expect(userReducer(beforeActionState, refreshActionStart)).toMatchSnapshot();
  });
});

describe('AUTH_USER_SUCCESS_STATE', () => {
  const beforeActionState = {
    ...initialState,
    userData: {
      isAuthenticated: true,
      displayName: 'displayName',
      email: 'email',
      idToken: 'idToken',
      expiryDate: 'expiryDate'
    }
  };

  it('1returns initial state', () => {
    const action = { type: 'dummy_action' };
    const expectedState = beforeActionState;
    expect(userReducer(beforeActionState, action)).toEqual(expectedState);
    expect(userReducer(beforeActionState, action)).toMatchSnapshot();
  });

  it('2returns authenticateUserSuccess state', () => {
    const displayName = 'displayName2';
    const email = 'email2';
    const idToken = 'idToken2';
    const expiryDate = 'expiryDate2';
    const startAction = userActions.authenticateUserSuccess(displayName, email, idToken, expiryDate);
    const expectedState = {
      ...beforeActionState,
      userData: {
        isAuthenticated: true,
        displayName,
        email,
        idToken,
        expiryDate
      }
    };
    expect(userReducer(beforeActionState, startAction)).toEqual(expectedState);
    expect(userReducer(beforeActionState, startAction)).toMatchSnapshot();
  });

  it('3returns authenticateUserError state', () => {
    const error = 'error';
    const stopAction = userActions.authenticateUserError(error);
    const expectedState = {
      ...beforeActionState,
      error
    };
    expect(userReducer(beforeActionState, stopAction)).toEqual(expectedState);
    expect(userReducer(beforeActionState, stopAction)).toMatchSnapshot();
  });

  it('4returns logout state', () => {
    const refreshActionStart = userActions.logout();
    const expectedState = initialState;
    expect(userReducer(beforeActionState, refreshActionStart)).toEqual(expectedState);
    expect(userReducer(beforeActionState, refreshActionStart)).toMatchSnapshot();
  });
});

describe('AUTH_USER_ERROR_STATE', () => {
  const beforeActionState = {
    ...initialState,
    error: 'error'
  };

  it('1returns initial state', () => {
    const action = { type: 'dummy_action' };
    const expectedState = beforeActionState;
    expect(userReducer(beforeActionState, action)).toEqual(expectedState);
    expect(userReducer(beforeActionState, action)).toMatchSnapshot();
  });

  it('2returns authenticateUserSuccess state', () => {
    const displayName = 'displayName2';
    const email = 'email2';
    const idToken = 'idToken2';
    const expiryDate = 'expiryDate2';
    const startAction = userActions.authenticateUserSuccess(displayName, email, idToken, expiryDate);
    const expectedState = {
      ...beforeActionState,
      userData: {
        isAuthenticated: true,
        displayName,
        email,
        idToken,
        expiryDate
      },
      error: null
    };
    expect(userReducer(beforeActionState, startAction)).toEqual(expectedState);
    expect(userReducer(beforeActionState, startAction)).toMatchSnapshot();
  });

  it('3returns authenticateUserError state', () => {
    const error = 'error2';
    const stopAction = userActions.authenticateUserError(error);
    const expectedState = {
      ...beforeActionState,
      error
    };
    expect(userReducer(beforeActionState, stopAction)).toEqual(expectedState);
    expect(userReducer(beforeActionState, stopAction)).toMatchSnapshot();
  });

  it('4returns logout state', () => {
    const refreshActionStart = userActions.logout();
    const expectedState = initialState;
    expect(userReducer(beforeActionState, refreshActionStart)).toEqual(expectedState);
    expect(userReducer(beforeActionState, refreshActionStart)).toMatchSnapshot();
  });
});
