import { call, select, takeLeading } from 'redux-saga/effects';
import { REHYDRATE } from 'redux-persist/lib/constants';
import { initAppSaga, watchInitAppSaga } from 'src/store/sagas/appSaga';
import { changeLocaleSaga } from 'src/store/sagas/localeSaga';
import { currLocaleSelector } from 'src/store/selectors';

describe('initAppSaga test', () => {
  it('should successfully init app', () => {
    const gen = initAppSaga();
    expect(gen.next().value).toEqual(select(currLocaleSelector));
    const locale = 'en';
    expect(gen.next(locale).value).toEqual(call(changeLocaleSaga, { payload: { locale } }));
    expect(gen.next().done).toBe(true);
  });

  it('should catch error if occurs', () => {
    const gen = initAppSaga();
    gen.next();
    const error = new Error('msg');
    gen.throw(error).value
    expect(gen.next().done).toBe(true);
  });
});

describe('watchInitAppSaga test', () => {
  const gen = watchInitAppSaga();
  // exactly the same as implementation
  const expected = takeLeading(REHYDRATE, initAppSaga);
  const actual = gen.next().value;

  it('Should fire on REHYDRATE', () => {
    expect(actual).toEqual(expected);
  });
});
