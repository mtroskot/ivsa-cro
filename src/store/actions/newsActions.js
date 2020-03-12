import { newsActionTypes } from 'src/constants/actionTypes';

export function fetchNews(refreshing = false) {
  return {
    type: newsActionTypes.FETCH_NEWS,
    payload: { refreshing }
  };
}
export function fetchNewsSuccess(news, lastUpdate) {
  return {
    type: newsActionTypes.FETCH_NEWS_SUCCESS,
    payload: { news, lastUpdate }
  };
}
export function fetchNewsError(error) {
  return {
    type: newsActionTypes.FETCH_NEWS_ERROR,
    payload: { error }
  };
}

export function publishNews(date, publishedBy, notice) {
  return {
    type: newsActionTypes.PUBLISH_NEWS,
    payload: { date, publishedBy, notice }
  };
}

export function publishNewsSuccess(news, lastUpdate) {
  return {
    type: newsActionTypes.PUBLISH_NEWS_SUCCESS,
    payload: { news, lastUpdate }
  };
}

export function updateNews(newsId, date, publishedBy, notice) {
  return {
    type: newsActionTypes.UPDATE_NEWS,
    payload: { newsId, date, publishedBy, notice }
  };
}

export function updateNewsSuccess(news, lastUpdate) {
  return {
    type: newsActionTypes.UPDATE_NEWS_SUCCESS,
    payload: { news, lastUpdate }
  };
}

export function deleteNews(newsId) {
  return {
    type: newsActionTypes.DELETE_NEWS,
    payload: { newsId }
  };
}

export function deleteNewsSuccess(news, lastUpdate) {
  return {
    type: newsActionTypes.DELETE_NEWS_SUCCESS,
    payload: { news, lastUpdate }
  };
}
