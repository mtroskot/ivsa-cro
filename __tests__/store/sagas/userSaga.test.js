import { call, put, takeLeading } from 'redux-saga/effects';
import { authenticateUserSaga, watchAuthenticateUserSaga } from 'src/store/sagas/userSaga';
import { authenticateUserError, authenticateUserSuccess } from 'src/store/actions/userActions';
import { startAction, stopAction, togglePopupMessage } from 'src/store/actions/uiActions';
import { userActionTypes } from 'src/constants/actionTypes';
import { ApiService, NavigationService } from 'src/services';
import { StringUtils } from 'src/utils';
import locales from 'src/constants/localization';

jest.mock('src/utils', () => {
  return {
    ObjectUtils: {
      isObject: jest.fn().mockReturnValue(true)
    },
    StringUtils: {
      isEmpty: jest.fn(),
      getDisplayNameFromEmail: jest.fn()
    }
  };
});

describe('authenticateUserSaga test', () => {
  const mockedDate = new Date(2017, 11, 10);
  global.Date = jest.fn(() => mockedDate);

  it('should successfully authenticate user, displayName not present', () => {
    const action = {
      type: userActionTypes.AUTH_USER,
      payload: { email: 'email', password: 'password' }
    };
    const gen = authenticateUserSaga(action);
    expect(gen.next().value).toEqual(put(startAction(action.type)));
    expect(gen.next().value).toEqual(call(ApiService.authenticate, action.payload.email, action.payload.password));
    const response = {
      email: 'authEmail',
      idToken: 'idToken',
      displayName: ''
    };
    expect(gen.next(response).value).toEqual(call(StringUtils.isEmpty, response.displayName));
    expect(gen.next(true).value).toEqual(call(StringUtils.getDisplayNameFromEmail, response.email));
    const newDisplayName = 'newDisplayName';
    expect(gen.next(newDisplayName).value).toEqual(
      put(authenticateUserSuccess(newDisplayName, response.email, response.idToken, mockedDate.toString()))
    );
    expect(gen.next().value).toEqual(call(NavigationService.goBack));
    expect(gen.next().value).toEqual(call(NavigationService.openDrawer));
    expect(gen.next().value).toEqual(put(stopAction(action.type)));
    expect(gen.next().done).toBe(true);
  });

  it('should successfully authenticate user, displayName present', () => {
    const action = {
      type: userActionTypes.AUTH_USER,
      payload: { email: 'email', password: 'password' }
    };
    const gen = authenticateUserSaga(action);
    expect(gen.next().value).toEqual(put(startAction(action.type)));
    expect(gen.next().value).toEqual(call(ApiService.authenticate, action.payload.email, action.payload.password));
    const response = {
      email: 'authEmail',
      idToken: 'idToken',
      displayName: 'displayName'
    };
    expect(gen.next(response).value).toEqual(call(StringUtils.isEmpty, response.displayName));
    expect(gen.next(false).value).toEqual(
      put(authenticateUserSuccess(response.displayName, response.email, response.idToken, mockedDate.toString()))
    );
    expect(gen.next().value).toEqual(call(NavigationService.goBack));
    expect(gen.next().value).toEqual(call(NavigationService.openDrawer));
    expect(gen.next().value).toEqual(put(stopAction(action.type)));
    expect(gen.next().done).toBe(true);
  });

  it('should catch error if occurs', () => {
    const action = {
      payload: {}
    };
    const gen = authenticateUserSaga(action);
    gen.next();
    const error = new Error('msg');
    expect(gen.throw(error).value).toEqual(put(togglePopupMessage(locales.emailOrPasswordInvalid, 'top')));
    expect(gen.next().value).toEqual(put(authenticateUserError(locales.emailOrPasswordInvalid)));
    expect(gen.next().value).toEqual(put(stopAction(action.type)));
    expect(gen.next().done).toBe(true);
  });
});

describe('watchAuthenticateUserSaga test', () => {
  const gen = watchAuthenticateUserSaga();
  // exactly the same as implementation
  const expected = takeLeading(userActionTypes.AUTH_USER, authenticateUserSaga);
  const actual = gen.next().value;

  it('Should fire on AUTH_USER', () => {
    expect(actual).toEqual(expected);
  });
});
