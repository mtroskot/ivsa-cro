import { localeActionTypes } from 'src/constants/actionTypes';

export function changeLocale(locale) {
  return {
    type: localeActionTypes.CHANGE_LOCALE,
    payload: { locale }
  };
}
export function changeLocaleSuccess(locale) {
  return {
    type: localeActionTypes.CHANGE_LOCALE_SUCCESS,
    payload: { locale }
  };
}
