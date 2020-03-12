import { call, put, select, takeLeading } from 'redux-saga/effects';
import {
  deleteNewsSaga,
  fetchNewsSaga,
  publishNewsSaga,
  updateNewsSaga,
  watchDeleteNewsSaga,
  watchFetchNewsSaga,
  watchPublishNewsSaga,
  watchUpdateNewsSaga
} from 'src/store/sagas/newsSaga';
import {
  deleteNewsSuccess,
  fetchNewsError,
  fetchNewsSuccess,
  publishNewsSuccess,
  updateNewsSuccess
} from 'src/store/actions/newsActions';
import {
  refreshActionStart,
  refreshActionStop,
  startAction,
  stopAction,
  togglePopupMessage
} from 'src/store/actions/uiActions';
import { newsActionTypes } from 'src/constants/actionTypes';
import { ApiService, NavigationService } from 'src/services';
import { DEFAULT_ERROR } from 'src/constants/error';
import { newsDataSelector } from 'src/store/selectors';
import { newsRequests } from 'src/services/api';
import { ObjectUtils } from 'src/utils';
import NewsData from 'src/models/NewsData';
import { screenNames } from 'src/constants/navigation';

jest.mock('src/utils', () => {
  return {
    ObjectUtils: {
      isObject: jest.fn().mockReturnValue(true),
      isEmpty: jest.fn()
    },
    StringUtils: {
      checkIfString: jest.fn(() => true)
    }
  };
});
jest.dontMock('src/constants/error');

describe('fetchNewsSaga test', () => {
  const dateNowMock = 150;
  beforeEach(() => {
    jest.clearAllMocks();
    global.Date.now = jest.fn(() => dateNowMock);
  });

  it('should successfully fetch news, first time fetching news', () => {
    const action = {
      type: newsActionTypes.FETCH_NEWS,
      payload: {}
    };
    const gen = fetchNewsSaga(action);
    expect(gen.next().value).toEqual(select(newsDataSelector));
    const cachedNews = {};
    const lastUpdate = 0;
    const news = { cachedNews, lastUpdate };
    expect(gen.next(news).value).toEqual(call(ObjectUtils.isEmpty, cachedNews));
    expect(gen.next(true).value).toEqual(put(startAction(newsActionTypes.FETCH_NEWS)));
    expect(gen.next().value).toEqual(call(ApiService.callApiAndCheckResponse, newsRequests.getNews()));
    const response = { 1: {}, 2: {} };
    expect(gen.next(response).value).toEqual(put(fetchNewsSuccess(response, dateNowMock)));
    expect(gen.next().value).toEqual(put(stopAction(newsActionTypes.FETCH_NEWS)));
    expect(gen.next().done).toBe(true);
  });

  it('should successfully fetch news,refreshing news', () => {
    const action = {
      type: newsActionTypes.FETCH_NEWS,
      payload: { refreshing: true }
    };
    const gen = fetchNewsSaga(action);
    expect(gen.next().value).toEqual(select(newsDataSelector));
    const cachedNews = {};
    const lastUpdate = 0;
    const news = { cachedNews, lastUpdate };
    expect(gen.next(news).value).toEqual(call(ObjectUtils.isEmpty, cachedNews));
    expect(gen.next(false).value).toEqual(put(refreshActionStart(newsActionTypes.FETCH_NEWS)));
    expect(gen.next().value).toEqual(call(ApiService.callApiAndCheckResponse, newsRequests.getNews()));
    const response = { 1: {}, 2: {} };
    expect(gen.next(response).value).toEqual(put(fetchNewsSuccess(response, dateNowMock)));
    expect(gen.next().value).toEqual(put(refreshActionStop(newsActionTypes.FETCH_NEWS)));
    expect(gen.next().done).toBe(true);
  });

  it('should successfully fetch news,cache expired, fetched news empty', () => {
    const dateNowMock2 = 8200000;
    global.Date.now = jest.fn(() => dateNowMock2);
    const action = {
      type: newsActionTypes.FETCH_NEWS,
      payload: { refreshing: false }
    };
    const gen = fetchNewsSaga(action);
    expect(gen.next().value).toEqual(select(newsDataSelector));
    const cachedNews = {};
    const lastUpdate = 100;
    const news = { cachedNews, lastUpdate };
    expect(gen.next(news).value).toEqual(call(ObjectUtils.isEmpty, cachedNews));
    expect(gen.next(false).value).toEqual(put(startAction(newsActionTypes.FETCH_NEWS)));
    expect(gen.next().value).toEqual(call(ApiService.callApiAndCheckResponse, newsRequests.getNews()));
    const response = null;
    expect(gen.next(response).value).toEqual(put(fetchNewsSuccess({}, dateNowMock2)));
    expect(gen.next().value).toEqual(put(stopAction(newsActionTypes.FETCH_NEWS)));
    expect(gen.next().done).toBe(true);
  });

  it('should not fetch news, cached valid, not refreshing, previous news not empty', () => {
    const action = {
      type: newsActionTypes.FETCH_NEWS,
      payload: { refreshing: false }
    };
    const gen = fetchNewsSaga(action);
    expect(gen.next().value).toEqual(select(newsDataSelector));
    const cachedNews = {};
    const lastUpdate = 100;
    const news = { cachedNews, lastUpdate };
    expect(gen.next(news).value).toEqual(call(ObjectUtils.isEmpty, cachedNews));
    expect(gen.next(false).value).toEqual(put(stopAction(newsActionTypes.FETCH_NEWS)));
    expect(gen.next().done).toBe(true);
  });

  it('should catch error if NOTIFICATION_ERROR occurs', () => {
    const action = {
      payload: {},
      type: newsActionTypes.FETCH_NEWS
    };
    const gen = fetchNewsSaga(action);
    gen.next();
    const error = DEFAULT_ERROR;
    expect(gen.throw(error).value).toEqual(put(togglePopupMessage(DEFAULT_ERROR)));
    expect(gen.next().value).toEqual(put(fetchNewsError(DEFAULT_ERROR)));
    expect(gen.next().value).toEqual(put(stopAction(newsActionTypes.FETCH_NEWS)));
    expect(gen.next().done).toBe(true);
  });

  it('should catch error if occurs', () => {
    const action = {
      payload: {},
      type: newsActionTypes.FETCH_NEWS
    };
    const gen = fetchNewsSaga(action);
    gen.next();
    const error = new Error('msg');
    expect(gen.throw(error).value).toEqual(put(togglePopupMessage(DEFAULT_ERROR)));
    expect(gen.next().value).toEqual(put(fetchNewsError(error)));
    expect(gen.next().value).toEqual(put(stopAction(newsActionTypes.FETCH_NEWS)));
    expect(gen.next().done).toBe(true);
  });

  it('should catch error if occurs 2', () => {
    const action = {
      payload: { refreshing: true },
      type: newsActionTypes.FETCH_NEWS
    };
    const gen = fetchNewsSaga(action);
    gen.next();
    const error = new Error('msg');
    expect(gen.throw(error).value).toEqual(put(togglePopupMessage(DEFAULT_ERROR)));
    expect(gen.next().value).toEqual(put(fetchNewsError(error)));
    expect(gen.next().value).toEqual(put(refreshActionStop(newsActionTypes.FETCH_NEWS)));
    expect(gen.next().done).toBe(true);
  });
});

describe('watchFetchNewsSaga test', () => {
  const gen = watchFetchNewsSaga();
  // exactly the same as implementation
  const expected = takeLeading(newsActionTypes.FETCH_NEWS, fetchNewsSaga);
  const actual = gen.next().value;

  it('Should fire on FETCH_NEWS', () => {
    expect(actual).toEqual(expected);
  });
});

describe('publishNewsSaga test', () => {
  const dateNowMock = 150;
  beforeEach(() => {
    jest.clearAllMocks();
    global.Date.now = jest.fn(() => dateNowMock);
  });

  it('should successfully publish news', () => {
    const action = {
      type: newsActionTypes.PUBLISH_NEWS,
      payload: { date: 123, publishedBy: 'publishedBy', notice: 'notice' }
    };
    const gen = publishNewsSaga(action);
    expect(gen.next().value).toEqual(put(startAction(newsActionTypes.PUBLISH_NEWS)));
    const newsData = new NewsData(action.payload.date, action.payload.notice, action.payload.publishedBy);
    expect(gen.next().value).toEqual(call(ApiService.callApiAndCheckResponse, newsRequests.publishNews(newsData)));
    const response = {
      name: 'name'
    };
    expect(gen.next(response).value).toEqual(call(ApiService.callApiAndCheckResponse, newsRequests.getNews()));
    const allNews = { 1: {}, 2: {} };
    expect(gen.next(allNews).value).toEqual(put(publishNewsSuccess(allNews, dateNowMock)));
    expect(gen.next().value).toEqual(call(NavigationService.navigate, screenNames.NEWS));
    expect(gen.next().value).toEqual(put(stopAction(newsActionTypes.PUBLISH_NEWS)));
    expect(gen.next().done).toBe(true);
  });

  it('should catch error if occurs, dispatches PUBLISH_NEWS_ERROR', () => {
    const action = {
      payload: {},
      type: newsActionTypes.PUBLISH_NEWS
    };
    const gen = publishNewsSaga(action);
    gen.next();
    const error = DEFAULT_ERROR;
    expect(gen.throw(error).value).toEqual(put(togglePopupMessage(DEFAULT_ERROR)));
    expect(gen.next().value).toEqual(put(stopAction(newsActionTypes.PUBLISH_NEWS)));
    expect(gen.next().done).toBe(true);
  });

  it('should catch error if occurs, dispatches DEFAULT_ERROR', () => {
    const action = {
      payload: {},
      type: newsActionTypes.PUBLISH_NEWS
    };
    const gen = publishNewsSaga(action);
    gen.next();
    const error = new Error('msg');
    expect(gen.throw(error).value).toEqual(put(togglePopupMessage(DEFAULT_ERROR)));
    expect(gen.next().value).toEqual(put(stopAction(newsActionTypes.PUBLISH_NEWS)));
    expect(gen.next().done).toBe(true);
  });
});

describe('watchPublishNewsSaga test', () => {
  const gen = watchPublishNewsSaga();
  // exactly the same as implementation
  const expected = takeLeading(newsActionTypes.PUBLISH_NEWS, publishNewsSaga);
  const actual = gen.next().value;

  it('Should fire on PUBLISH_NEWS', () => {
    expect(actual).toEqual(expected);
  });
});

describe('updateNewsSaga test', () => {
  const dateNowMock = 150;
  beforeEach(() => {
    jest.clearAllMocks();
    global.Date.now = jest.fn(() => dateNowMock);
  });

  it('should successfully update news', () => {
    const action = {
      type: newsActionTypes.UPDATE_NEWS,
      payload: { newsId: 'newsId', date: 'date', publishedBy: 'publishedBy', notice: 'notice' }
    };
    const gen = updateNewsSaga(action);
    expect(gen.next().value).toEqual(put(startAction(newsActionTypes.UPDATE_NEWS)));
    const newsData = new NewsData(action.payload.date, action.payload.notice, action.payload.publishedBy);
    expect(gen.next().value).toEqual(
      call(ApiService.callApiAndCheckResponse, newsRequests.updateNews(action.payload.newsId, newsData))
    );
    expect(gen.next().value).toEqual(call(ApiService.callApiAndCheckResponse, newsRequests.getNews()));
    const allNews = { 1: {}, 2: {} };
    expect(gen.next(allNews).value).toEqual(put(updateNewsSuccess(allNews, dateNowMock)));
    expect(gen.next().value).toEqual(call(NavigationService.navigate, screenNames.NEWS));
    expect(gen.next().value).toEqual(put(stopAction(newsActionTypes.UPDATE_NEWS)));
    expect(gen.next().done).toBe(true);
  });

  it('should catch error if occurs, dispatches PUBLISH_NEWS_ERROR', () => {
    const action = {
      payload: {},
      type: newsActionTypes.UPDATE_NEWS
    };
    const gen = updateNewsSaga(action);
    gen.next();
    const error = DEFAULT_ERROR;
    expect(gen.throw(error).value).toEqual(put(togglePopupMessage(DEFAULT_ERROR)));
    expect(gen.next().value).toEqual(put(stopAction(newsActionTypes.UPDATE_NEWS)));
    expect(gen.next().done).toBe(true);
  });

  it('should catch error if occurs, dispatches DEFAULT_ERROR', () => {
    const action = {
      payload: {},
      type: newsActionTypes.UPDATE_NEWS
    };
    const gen = updateNewsSaga(action);
    gen.next();
    const error = new Error('msg');
    expect(gen.throw(error).value).toEqual(put(togglePopupMessage(DEFAULT_ERROR)));
    expect(gen.next().value).toEqual(put(stopAction(newsActionTypes.UPDATE_NEWS)));
    expect(gen.next().done).toBe(true);
  });
});

describe('watchUpdateNewsSaga test', () => {
  const gen = watchUpdateNewsSaga();
  // exactly the same as implementation
  const expected = takeLeading(newsActionTypes.UPDATE_NEWS, updateNewsSaga);
  const actual = gen.next().value;

  it('Should fire on UPDATE_NEWS', () => {
    expect(actual).toEqual(expected);
  });
});

describe('deleteNewsSaga test', () => {
  const dateNowMock = 150;
  beforeEach(() => {
    jest.clearAllMocks();
    global.Date.now = jest.fn(() => dateNowMock);
  });

  it('should successfully delete news', () => {
    const action = {
      type: newsActionTypes.DELETE_NEWS,
      payload: { newsId: 'newsId' }
    };
    const gen = deleteNewsSaga(action);
    expect(gen.next().value).toEqual(put(startAction(newsActionTypes.DELETE_NEWS, { id: action.payload.newsId })));
    expect(gen.next().value).toEqual(
      call(ApiService.callApiAndCheckResponse, newsRequests.deleteNews(action.payload.newsId))
    );
    expect(gen.next().value).toEqual(call(ApiService.callApiAndCheckResponse, newsRequests.getNews()));
    const allNews = { 1: {}, 2: {} };
    expect(gen.next(allNews).value).toEqual(put(deleteNewsSuccess(allNews, dateNowMock)));
    expect(gen.next().value).toEqual(put(stopAction(newsActionTypes.DELETE_NEWS)));
    expect(gen.next().done).toBe(true);
  });

  it('should catch error if occurs, dispatches PUBLISH_NEWS_ERROR', () => {
    const action = {
      payload: {},
      type: newsActionTypes.DELETE_NEWS
    };
    const gen = deleteNewsSaga(action);
    gen.next();
    const error = DEFAULT_ERROR;
    expect(gen.throw(error).value).toEqual(put(togglePopupMessage(DEFAULT_ERROR)));
    expect(gen.next().value).toEqual(put(stopAction(newsActionTypes.DELETE_NEWS)));
    expect(gen.next().done).toBe(true);
  });

  it('should catch error if occurs, dispatches DEFAULT_ERROR', () => {
    const action = {
      payload: {},
      type: newsActionTypes.DELETE_NEWS
    };
    const gen = deleteNewsSaga(action);
    gen.next();
    const error = new Error('msg');
    expect(gen.throw(error).value).toEqual(put(togglePopupMessage(DEFAULT_ERROR)));
    expect(gen.next().value).toEqual(put(stopAction(newsActionTypes.DELETE_NEWS)));
    expect(gen.next().done).toBe(true);
  });
});

describe('watchDeleteNewsSaga test', () => {
  const gen = watchDeleteNewsSaga();
  // exactly the same as implementation
  const expected = takeLeading(newsActionTypes.DELETE_NEWS, deleteNewsSaga);
  const actual = gen.next().value;

  it('Should fire on DELETE_NEWS', () => {
    expect(actual).toEqual(expected);
  });
});
