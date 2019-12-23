import { localeActions } from 'src/constants/store/actionTypes';

export function changeLocale(locale) {
  return {
    type: localeActions.CHANGE_LOCALE,
    payload: { locale }
  };
}
export function changeLocaleSuccess(locale) {
  return {
    type: localeActions.CHANGE_LOCALE_SUCCESS,
    payload: { locale }
  };
}
