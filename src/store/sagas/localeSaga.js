import { put, takeLeading } from '@redux-saga/core/effects';
import { changeLocaleSuccess } from 'src/store/actions/localeActions';
import { localeActionTypes } from 'src/constants/actionTypes';
import locales from 'src/constants/localization';

export function* changeLocaleSaga({ payload }) {
  try {
    const { locale } = payload;
    locales.setLanguage(locale);
    yield put(changeLocaleSuccess(locale));
  } catch (error) {
    console.log('changeLocaleSaga error', error);
  }
}

export function* watchChangeLocaleSaga() {
  yield takeLeading(localeActionTypes.CHANGE_LOCALE, changeLocaleSaga);
}
