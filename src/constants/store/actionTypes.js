export const userActions = Object.freeze({
  AUTH_USER: 'AUTH_USER',
  AUTH_USER_SUCCESS: 'AUTH_USER_SUCCESS',
  AUTH_USER_ERROR: 'AUTH_USER_ERROR',
  LOG_OUT: 'LOG_OUT'
});

export const uiActions = Object.freeze({
  UI_START_LOADING: 'UI_START_LOADING',
  UI_STOP_LOADING: 'UI_STOP_LOADING',
  TOGGLE_POPUP_MESSAGE: 'TOGGLE_POPUP_MESSAGE'
});

export const localeActions = Object.freeze({
  CHANGE_LOCALE: 'CHANGE_LOCALE',
  CHANGE_LOCALE_SUCCESS: 'CHANGE_LOCALE_SUCCESS'
});

export const newsActions = Object.freeze({
  PUBLISH_NEWS: 'PUBLISH_NEWS',
  PUBLISH_NEWS_SUCCESS: 'PUBLISH_NEWS_SUCCESS',
  UPDATE_NEWS: 'UPDATE_NEWS',
  UPDATE_NEWS_SUCCESS: 'UPDATE_NEWS_SUCCESS'
});

export const appActions = Object.freeze({
  AUTO_SIGN_IN: 'AUTO_SIGN_IN',
  APP_START: 'APP_START'
});
