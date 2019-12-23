import { REHYDRATE } from 'redux-persist/lib/constants';
import { call, select, takeLeading } from '@redux-saga/core/effects';
import { changeLocaleSaga } from 'src/store/sagas/localeSaga';
import { getCurrLocale } from 'src/store/selectors';

export function* initAppSaga(action) {
  try {
    const locale = yield select(getCurrLocale);
    yield call(changeLocaleSaga, { payload: { locale } });
  } catch (error) {
    console.log('changeLocaleSaga error', error);
  }
}

export function* watchInitAppSaga() {
  yield takeLeading(REHYDRATE, initAppSaga);
}
