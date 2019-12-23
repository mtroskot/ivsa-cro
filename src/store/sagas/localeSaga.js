import { put, takeLeading } from '@redux-saga/core/effects';
import { changeLocaleSuccess } from 'src/store/actions/localeActions';
import { localeActions } from 'src/constants/store/actionTypes';
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
  yield takeLeading(localeActions.CHANGE_LOCALE, changeLocaleSaga);
}
