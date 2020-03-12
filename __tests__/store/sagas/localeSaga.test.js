import { put, takeLeading } from 'redux-saga/effects';
import { changeLocaleSaga, watchChangeLocaleSaga } from 'src/store/sagas/localeSaga';
import { localeActionTypes } from 'src/constants/actionTypes';
import { changeLocaleSuccess } from 'src/store/actions/localeActions';

describe('changeLocaleSaga test', () => {
  it('should successfully change locale', () => {
    const action = {
      payload: { locale: 'de' }
    };
    const gen = changeLocaleSaga(action);
    expect(gen.next().value).toEqual(put(changeLocaleSuccess(action.payload.locale)));
    expect(gen.next().done).toBe(true);
  });

  it('should catch error if occurs', () => {
    const action = {
      payload: { locale: 'de' }
    };
    const gen = changeLocaleSaga(action);
    gen.next();
    const error = new Error('msg');
    gen.throw(error).value;
    expect(gen.next().done).toBe(true);
  });
});

describe('watchChangeLocaleSaga test', () => {
  const gen = watchChangeLocaleSaga();
  // exactly the same as implementation
  const expected = takeLeading(localeActionTypes.CHANGE_LOCALE, changeLocaleSaga);
  const actual = gen.next().value;

  it('Should fire on CHANGE_LOCALE', () => {
    expect(actual).toEqual(expected);
  });
});
