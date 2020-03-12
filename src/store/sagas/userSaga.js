import { call, put, takeLeading } from 'redux-saga/effects';
import { authenticateUserError, authenticateUserSuccess } from 'src/store/actions/userActions';
import { startAction, stopAction, togglePopupMessage } from 'src/store/actions/uiActions';
import { userActionTypes } from 'src/constants/actionTypes';
import { ApiService, NavigationService } from 'src/services';
import { StringUtils } from 'src/utils';
import locales from 'src/constants/localization';
import { userRequests } from 'src/services/api';

export function* authenticateUserSaga({ type, payload }) {
  try {
    yield put(startAction(type));
    const response = yield call(
      ApiService.callApiAndCheckResponse,
      userRequests.authenticate(payload.email, payload.password)
    );
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
  } finally {
    yield put(stopAction(type));
  }
}

export function* watchAuthenticateUserSaga() {
  yield takeLeading(userActionTypes.AUTH_USER, authenticateUserSaga);
}
