import localeReducer, { initialState } from 'src/store/reducers/localeReducer';
import * as localeActions from 'src/store/actions/localeActions';

describe('INITIAL_STATE', () => {
  const beforeActionState = initialState;

  it('1returns initial state', () => {
    const action = { type: 'dummy_action' };
    const expectedState = beforeActionState;
    expect(localeReducer(beforeActionState, action)).toEqual(expectedState);
    expect(localeReducer(beforeActionState, action)).toMatchSnapshot();
  });

  it('2returns changeLocaleSuccess state', () => {
    const locale = 'locale';
    const startAction = localeActions.changeLocaleSuccess(locale);
    const expectedState = {
      ...beforeActionState,
      currLocale: locale
    };
    expect(localeReducer(beforeActionState, startAction)).toEqual(expectedState);
    expect(localeReducer(beforeActionState, startAction)).toMatchSnapshot();
  });
});

describe('CHANGE_LOCALE_SUCCESS_STATE', () => {
  const beforeActionState = initialState;

  it('1returns initial state', () => {
    const action = { type: 'dummy_action' };
    const expectedState = beforeActionState;
    expect(localeReducer(beforeActionState, action)).toEqual(expectedState);
    expect(localeReducer(beforeActionState, action)).toMatchSnapshot();
  });

  it('2returns changeLocaleSuccess state', () => {
    const locale = 'locale2';
    const startAction = localeActions.changeLocaleSuccess(locale);
    const expectedState = {
      ...beforeActionState,
      currLocale: locale
    };
    expect(localeReducer(beforeActionState, startAction)).toEqual(expectedState);
    expect(localeReducer(beforeActionState, startAction)).toMatchSnapshot();
  });
});
