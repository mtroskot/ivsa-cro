import { call, put, select, takeLeading } from 'redux-saga/effects';
import {
  deleteNewsSuccess,
  fetchNewsError,
  fetchNewsSuccess,
  publishNewsSuccess,
  updateNewsSuccess
} from 'src/store/actions/newsActions';
import { ApiService, NavigationService } from 'src/services';
import { newsActionTypes } from 'src/constants/actionTypes';
import {
  refreshActionStart,
  refreshActionStop,
  startAction,
  stopAction,
  togglePopupMessage
} from 'src/store/actions/uiActions';
import { ObjectUtils } from 'src/utils';
import { DEFAULT_ERROR } from 'src/constants/error';
import { screenNames } from 'src/constants/navigation';
import NewsData from 'src/models/NewsData';
import { newsDataSelector } from 'src/store/selectors';

import { newsRequests } from 'src/services/api';
export function* fetchNewsSaga({ type, payload }) {
  const { refreshing } = payload;
  const dateNow = Date.now();
  try {
    const news = yield select(newsDataSelector);
    const { cachedNews, lastUpdate } = news;
    const interval = 60 * 60 * 1000; //1h in milliseconds
    // won't fetch news if notForceUpdate && cachedNews not empty && lastUpdated<1h
    const areCachedNewsEmpty = yield call(ObjectUtils.isEmpty, cachedNews);
    const shouldFetchNews = refreshing || areCachedNewsEmpty || dateNow - lastUpdate < interval;
    if (!shouldFetchNews) {
      return;
    }
  } catch (error) {
    console.log(error);
  }

  try {
    yield put(refreshing ? refreshActionStart(type) : startAction(type));
    const response = yield call(ApiService.callApiAndCheckResponse, newsRequests.getNews());
    yield put(fetchNewsSuccess(response || {}, dateNow)); //in case of empty news response is null
  } catch (error) {
    yield put(togglePopupMessage(DEFAULT_ERROR));
    yield put(fetchNewsError(error));
  } finally {
    yield put(payload.refreshing ? refreshActionStop(type) : stopAction(type));
  }
}

export function* watchFetchNewsSaga() {
  yield takeLeading(newsActionTypes.FETCH_NEWS, fetchNewsSaga);
}

export function* publishNewsSaga({ type, payload }) {
  try {
    yield put(startAction(type));
    const { date, publishedBy, notice } = payload;
    const newsData = new NewsData(date, notice, publishedBy);
    const response = yield call(ApiService.callApiAndCheckResponse, newsRequests.publishNews(newsData));
    const newsId = response.name;
    // // yield call(ApiService.pushNotification, 'New notification in news', news, { newsId: newsId });
    const allNews = yield call(ApiService.callApiAndCheckResponse, newsRequests.getNews());
    const lastUpdate = Date.now();
    yield put(publishNewsSuccess(allNews, lastUpdate));
    yield call(NavigationService.navigate, screenNames.NEWS);
  } catch (error) {
    console.log('publishNewsSaga error', error);
    yield put(togglePopupMessage(DEFAULT_ERROR));
  } finally {
    yield put(stopAction(type));
  }
}

export function* watchPublishNewsSaga() {
  yield takeLeading(newsActionTypes.PUBLISH_NEWS, publishNewsSaga);
}

export function* updateNewsSaga({ type, payload }) {
  try {
    yield put(startAction(type));
    const { newsId, date, publishedBy, notice } = payload;
    const newsData = new NewsData(date, notice, publishedBy);
    yield call(ApiService.callApiAndCheckResponse, newsRequests.updateNews(newsId, newsData));
    // yield call(ApiService.pushNotification, 'A news has been updated', news, { newsId: newsId });
    const response = yield call(ApiService.callApiAndCheckResponse, newsRequests.getNews());
    const lastUpdate = Date.now();
    yield put(updateNewsSuccess(response, lastUpdate));
    yield call(NavigationService.navigate, screenNames.NEWS);
  } catch (error) {
    console.log('updateNewsSaga error', error);
    yield put(togglePopupMessage(DEFAULT_ERROR));
  } finally {
    yield put(stopAction(type));
  }
}

export function* watchUpdateNewsSaga() {
  yield takeLeading(newsActionTypes.UPDATE_NEWS, updateNewsSaga);
}

export function* deleteNewsSaga({ type, payload }) {
  try {
    const { newsId } = payload;
    yield put(startAction(type, { id: newsId }));
    yield call(ApiService.callApiAndCheckResponse, newsRequests.deleteNews(newsId));
    // yield call(ApiService.pushNotification, 'A news has been deleted', news, { newsId: newsId });
    const response = yield call(ApiService.callApiAndCheckResponse, newsRequests.getNews());
    const lastUpdate = Date.now();
    yield put(deleteNewsSuccess(response, lastUpdate));
  } catch (error) {
    console.log('deleteNewsSaga error', error);
    yield put(togglePopupMessage(DEFAULT_ERROR));
  } finally {
    yield put(stopAction(type));
  }
}

export function* watchDeleteNewsSaga() {
  yield takeLeading(newsActionTypes.DELETE_NEWS, deleteNewsSaga);
}
