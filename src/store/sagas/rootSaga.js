import { all } from 'redux-saga/effects';
import { watchAuthenticateUserSaga } from 'src/store/sagas/userSaga';
import {
  watchDeleteNewsSaga,
  watchFetchNewsSaga,
  watchPublishNewsSaga,
  watchUpdateNewsSaga
} from 'src/store/sagas/newsSaga';
import { watchChangeLocaleSaga } from 'src/store/sagas/localeSaga';
import { watchInitAppSaga } from 'src/store/sagas/appSaga';

// prettier-ignore
export default function* rootSaga() {
  yield all([
      watchAuthenticateUserSaga(),
      watchFetchNewsSaga(), watchPublishNewsSaga(), watchUpdateNewsSaga(), watchDeleteNewsSaga(),
      watchChangeLocaleSaga(),
      watchInitAppSaga()
  ]);
}
