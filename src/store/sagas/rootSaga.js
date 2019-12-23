import { all } from 'redux-saga/effects';
import { watchAuthenticateUser } from 'src/store/sagas/userSaga';
import { watchPublishNewsSaga, watchUpdateNewsSaga } from 'src/store/sagas/newsSaga';
import { watchChangeLocaleSaga } from 'src/store/sagas/localeSaga';
import { watchInitAppSaga } from 'src/store/sagas/appSaga';

// prettier-ignore
export default function* rootSaga() {
  yield all([
      watchAuthenticateUser(),
      watchPublishNewsSaga(),watchUpdateNewsSaga(),
      watchChangeLocaleSaga(),
      watchInitAppSaga()
  ]);
}
