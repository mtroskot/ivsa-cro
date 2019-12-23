import { newsActions } from 'src/constants/store/actionTypes';

export function publishNews(date, publishedBy, notice) {
  return {
    type: newsActions.PUBLISH_NEWS,
    paload: { date, publishedBy, notice }
  };
}

export function publishNewsSuccess(key, date, publishedBy, notice) {
  return {
    type: newsActions.PUBLISH_NEWS_SUCCESS,
    payload: { key, date, publishedBy, notice }
  };
}

export function updateNews(key, date, publishedBy, notice) {
  return {
    type: newsActions.UPDATE_NEWS,
    payload: { key, date, publishedBy, notice }
  };
}

export function updateNewsSuccess(key, date, publishedBy, notice) {
  return {
    type: newsActions.UPDATE_NEWS_SUCCESS,
    payload: { key, date, publishedBy, notice }
  };
}
