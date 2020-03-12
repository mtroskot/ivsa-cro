import configureStore from 'redux-mock-store';
import * as localeActions from 'src/store/actions/localeActions';
import { localeActionTypes } from 'src/constants/actionTypes';

const middlewares = [];
const mockStore = configureStore(middlewares);
// Initialize mockstore with empty state
const initialState = {};
const store = mockStore(initialState);

describe('Locale actions tests', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('dispatches changeLocale action', () => {
    const locale = 'en';
    const expectedActions = [
      {
        type: localeActionTypes.CHANGE_LOCALE,
        payload: { locale }
      }
    ];
    store.dispatch(localeActions.changeLocale(locale));
    expect(store.getActions()).toEqual(expectedActions);
    expect(store.getActions()).toMatchSnapshot();
  });

  it('dispatches requestInProgressStart action', () => {
    const locale = 'de';
    const expectedActions = [
      {
        type: localeActionTypes.CHANGE_LOCALE_SUCCESS,
        payload: { locale }
      }
    ];
    store.dispatch(localeActions.changeLocaleSuccess(locale));
    expect(store.getActions()).toEqual(expectedActions);
    expect(store.getActions()).toMatchSnapshot();
  });
});
