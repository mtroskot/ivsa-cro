import configureStore from 'redux-mock-store';
import * as newsActions from 'src/store/actions/newsActions';
import { newsActionTypes } from 'src/constants/actionTypes';

const middlewares = [];
const mockStore = configureStore(middlewares);
// Initialize mockstore with empty state
const initialState = {};
const store = mockStore(initialState);

describe('News actions tests', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('dispatches fetchNews action 1', () => {
    const refreshing = false;
    const expectedActions = [
      {
        type: newsActionTypes.FETCH_NEWS,
        payload: { refreshing }
      }
    ];
    store.dispatch(newsActions.fetchNews(refreshing));
    expect(store.getActions()).toEqual(expectedActions);
    expect(store.getActions()).toMatchSnapshot();
  });

  it('dispatches fetchNews action 2', () => {
    const refreshing = false;
    const expectedActions = [
      {
        type: newsActionTypes.FETCH_NEWS,
        payload: { refreshing }
      }
    ];
    store.dispatch(newsActions.fetchNews(undefined));
    expect(store.getActions()).toEqual(expectedActions);
    expect(store.getActions()).toMatchSnapshot();
  });

  it('dispatches fetchNews action 3', () => {
    const expectedActions = [
      {
        type: newsActionTypes.FETCH_NEWS,
        payload: { refreshing: null }
      }
    ];
    store.dispatch(newsActions.fetchNews(null));
    expect(store.getActions()).toEqual(expectedActions);
    expect(store.getActions()).toMatchSnapshot();
  });

  it('dispatches fetchNews action 4', () => {
    const refreshing = false;
    const expectedActions = [
      {
        type: newsActionTypes.FETCH_NEWS,
        payload: { refreshing }
      }
    ];
    store.dispatch(newsActions.fetchNews());
    expect(store.getActions()).toEqual(expectedActions);
    expect(store.getActions()).toMatchSnapshot();
  });

  it('dispatches fetchNews action 5', () => {
    const refreshing = true;
    const expectedActions = [
      {
        type: newsActionTypes.FETCH_NEWS,
        payload: { refreshing }
      }
    ];
    store.dispatch(newsActions.fetchNews(refreshing));
    expect(store.getActions()).toEqual(expectedActions);
    expect(store.getActions()).toMatchSnapshot();
  });

  it('dispatches fetchNewsSuccess action', () => {
    const news = {};
    const lastUpdate = 0;
    const expectedActions = [
      {
        type: newsActionTypes.FETCH_NEWS_SUCCESS,
        payload: { news, lastUpdate }
      }
    ];
    store.dispatch(newsActions.fetchNewsSuccess(news, lastUpdate));
    expect(store.getActions()).toEqual(expectedActions);
    expect(store.getActions()).toMatchSnapshot();
  });

  it('dispatches fetchNewsError action', () => {
    const error = 'error';
    const expectedActions = [
      {
        type: newsActionTypes.FETCH_NEWS_ERROR,
        payload: { error }
      }
    ];
    store.dispatch(newsActions.fetchNewsError(error));
    expect(store.getActions()).toEqual(expectedActions);
    expect(store.getActions()).toMatchSnapshot();
  });

  it('dispatches publishNews action', () => {
    const date = 'date';
    const publishedBy = 'publishedBy';
    const notice = 'notice';
    const expectedActions = [
      {
        type: newsActionTypes.PUBLISH_NEWS,
        payload: { date, publishedBy, notice }
      }
    ];
    store.dispatch(newsActions.publishNews(date, publishedBy, notice));
    expect(store.getActions()).toEqual(expectedActions);
    expect(store.getActions()).toMatchSnapshot();
  });

  it('dispatches publishNewsSuccess action', () => {
    const news = {};
    const lastUpdate = 0;
    const expectedActions = [
      {
        type: newsActionTypes.PUBLISH_NEWS_SUCCESS,
        payload: { news, lastUpdate }
      }
    ];
    store.dispatch(newsActions.publishNewsSuccess(news, lastUpdate));
    expect(store.getActions()).toEqual(expectedActions);
    expect(store.getActions()).toMatchSnapshot();
  });

  it('dispatches updateNews action', () => {
    const newsId = 'newsId';
    const date = 'date';
    const publishedBy = 'publishedBy';
    const notice = 'notice';
    const expectedActions = [
      {
        type: newsActionTypes.UPDATE_NEWS,
        payload: { newsId, date, publishedBy, notice }
      }
    ];
    store.dispatch(newsActions.updateNews(newsId, date, publishedBy, notice));
    expect(store.getActions()).toEqual(expectedActions);
    expect(store.getActions()).toMatchSnapshot();
  });

  it('dispatches publishNewsSuccess action', () => {
    const news = {};
    const lastUpdate = 0;
    const expectedActions = [
      {
        type: newsActionTypes.UPDATE_NEWS_SUCCESS,
        payload: { news, lastUpdate }
      }
    ];
    store.dispatch(newsActions.updateNewsSuccess(news, lastUpdate));
    expect(store.getActions()).toEqual(expectedActions);
    expect(store.getActions()).toMatchSnapshot();
  });

  it('dispatches deleteNews action', () => {
    const newsId = 'newsId';
    const expectedActions = [
      {
        type: newsActionTypes.DELETE_NEWS,
        payload: { newsId }
      }
    ];
    store.dispatch(newsActions.deleteNews(newsId));
    expect(store.getActions()).toEqual(expectedActions);
    expect(store.getActions()).toMatchSnapshot();
  });

  it('dispatches publishNewsSuccess action', () => {
    const news = {};
    const lastUpdate = 0;
    const expectedActions = [
      {
        type: newsActionTypes.DELETE_NEWS_SUCCESS,
        payload: { news, lastUpdate }
      }
    ];
    store.dispatch(newsActions.deleteNewsSuccess(news, lastUpdate));
    expect(store.getActions()).toEqual(expectedActions);
    expect(store.getActions()).toMatchSnapshot();
  });
});
