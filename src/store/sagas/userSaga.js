import { call, put, takeLeading } from 'redux-saga/effects';
import { authenticateUserSuccess, authenticateUserError } from 'src/store/actions/userActions';
import { togglePopupMessage } from 'src/store/actions/uiActions';
import { userActions } from 'src/constants/store/actionTypes';
import { ApiService, NavigationService } from 'src/services';
import { StringUtils } from 'src/utils';
import locales from 'src/constants/localization';

export function* authenticateUserSaga({ payload }) {
  try {
    const response = yield call(ApiService.authenticate, payload.email, payload.password);
    const { email, idToken } = response;
    let { displayName } = response;
    if (yield call(StringUtils.isEmpty, displayName)) {
      displayName = yield call(StringUtils.getDisplayNameFromEmail, email);
    }
    yield put(authenticateUserSuccess(displayName, email, idToken, new Date().toString()));
    yield call(NavigationService.goBack);
    yield call(NavigationService.openDrawer);
  } catch (error) {
    yield put(togglePopupMessage(locales.emailOrPasswordInvalid, 'top'));
    yield put(authenticateUserError(locales.emailOrPasswordInvalid));
    console.log('authenticateUserSaga error', error);
  }
}

export function* watchAuthenticateUser() {
  yield takeLeading(userActions.AUTH_USER, authenticateUserSaga);
}
