import { takeLeading, put, call } from 'redux-saga/effects';
import { publishNewsSuccess, updateNewsSuccess } from 'src/store/actions/newsActions';
import { ApiService } from 'src/services';
import { newsActions } from 'src/constants/store/actionTypes';

export function* publishNewsSaga({ payload }) {
  try {
    const { date, publishedBy, news } = payload;
    const newsData = { date, publishedBy, news };
    const response = yield call(ApiService.publishNews, newsData);
    const key = response.name;
    yield call(ApiService.pushNotification, 'New notification in news', news, { newsId: key });
    yield put(publishNewsSuccess(key, date, publishedBy, news));
  } catch (error) {
    if (error === 'Push Notification fail') {
      alert('Push Notification fail');
    } else {
      alert('Publish notice failed');
    }
  }
}

export function* watchPublishNewsSaga() {
  yield takeLeading(newsActions.PUBLISH_NEWS, publishNewsSaga);
}

export function* updateNewsSaga({ payload }) {
  try {
    const { key, date, publishedBy, news } = payload;
    const newsData = { date, publishedBy, news };
    yield call(ApiService.updateNews, key, newsData);
    yield call(ApiService.pushNotification, 'A notification has been updated in news', news, { newsId: key });
    yield put(updateNewsSuccess(key, date, publishedBy, newsData));
  } catch (error) {
    if (error === 'Push Notification fail') {
      alert('Push Notification fail');
    } else {
      alert('Update news failed');
    }
  }
}

export function* watchUpdateNewsSaga() {
  yield takeLeading(newsActions.UPDATE_NEWS, updateNewsSaga);
}
