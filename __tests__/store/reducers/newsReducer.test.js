import newsReducer,{initialState} from 'src/store/reducers/newsReducer';
import * as newsActions from 'src/store/actions/newsActions';

describe('INITIAL_STATE', () => {
  const beforeActionState = initialState;

  it('1returns initial state', () => {
    const action = { type: 'dummy_action' };
    const expectedState = beforeActionState;
    expect(newsReducer(beforeActionState, action)).toEqual(expectedState);
    expect(newsReducer(beforeActionState, action)).toMatchSnapshot();
  });

  it('2returns fetchNewsSuccess state', () => {
    const news = { 1: {}, 2: {} };
    const lastUpdate = 1;
    const startAction = newsActions.fetchNewsSuccess(news, lastUpdate);
    const expectedState = {
      ...beforeActionState,
      cachedNews: news,
      lastUpdate
    };
    expect(newsReducer(beforeActionState, startAction)).toEqual(expectedState);
    expect(newsReducer(beforeActionState, startAction)).toMatchSnapshot();
  });

  it('3returns publishNewsSuccess state', () => {
    const news = { 1: {}, 2: {} };
    const lastUpdate = 1;
    const startAction = newsActions.publishNewsSuccess(news, lastUpdate);
    const expectedState = {
      ...beforeActionState,
      cachedNews: news,
      lastUpdate
    };
    expect(newsReducer(beforeActionState, startAction)).toEqual(expectedState);
    expect(newsReducer(beforeActionState, startAction)).toMatchSnapshot();
  });

  it('4returns deleteNewsSuccess state', () => {
    const news = { 1: {}, 2: {} };
    const lastUpdate = 1;
    const startAction = newsActions.deleteNewsSuccess(news, lastUpdate);
    const expectedState = {
      ...beforeActionState,
      cachedNews: news,
      lastUpdate
    };
    expect(newsReducer(beforeActionState, startAction)).toEqual(expectedState);
    expect(newsReducer(beforeActionState, startAction)).toMatchSnapshot();
  });

  it('5returns updateNewsSuccess state', () => {
    const news = { 1: {}, 2: {} };
    const lastUpdate = 1;
    const startAction = newsActions.updateNewsSuccess(news, lastUpdate);
    const expectedState = {
      ...beforeActionState,
      cachedNews: news,
      lastUpdate
    };
    expect(newsReducer(beforeActionState, startAction)).toEqual(expectedState);
    expect(newsReducer(beforeActionState, startAction)).toMatchSnapshot();
  });

  it('6returns fetchNewsError state', () => {
    const error = 'error';
    const startAction = newsActions.fetchNewsError(error);
    const expectedState = {
      ...beforeActionState,
      error
    };
    expect(newsReducer(beforeActionState, startAction)).toEqual(expectedState);
    expect(newsReducer(beforeActionState, startAction)).toMatchSnapshot();
  });
});

describe('FETCH_NEWS_SUCCESS_STATE', () => {
  const beforeActionState = {
    ...initialState,
    cachedNews: { 1: {}, 2: {} },
    lastUpdate: 2
  };

  it('1returns initial state', () => {
    const action = { type: 'dummy_action' };
    const expectedState = beforeActionState;
    expect(newsReducer(beforeActionState, action)).toEqual(expectedState);
    expect(newsReducer(beforeActionState, action)).toMatchSnapshot();
  });

  it('2returns fetchNewsSuccess state', () => {
    const news = { 3: {}, 4: {} };
    const lastUpdate = 3;
    const startAction = newsActions.fetchNewsSuccess(news, lastUpdate);
    const expectedState = {
      ...beforeActionState,
      cachedNews: news,
      lastUpdate
    };
    expect(newsReducer(beforeActionState, startAction)).toEqual(expectedState);
    expect(newsReducer(beforeActionState, startAction)).toMatchSnapshot();
  });

  it('3returns publishNewsSuccess state', () => {
    const news = { 3: {}, 4: {} };
    const lastUpdate = 3;
    const startAction = newsActions.publishNewsSuccess(news, lastUpdate);
    const expectedState = {
      ...beforeActionState,
      cachedNews: news,
      lastUpdate
    };
    expect(newsReducer(beforeActionState, startAction)).toEqual(expectedState);
    expect(newsReducer(beforeActionState, startAction)).toMatchSnapshot();
  });

  it('4returns deleteNewsSuccess state', () => {
    const news = { 3: {}, 4: {} };
    const lastUpdate = 3;
    const startAction = newsActions.deleteNewsSuccess(news, lastUpdate);
    const expectedState = {
      ...beforeActionState,
      cachedNews: news,
      lastUpdate
    };
    expect(newsReducer(beforeActionState, startAction)).toEqual(expectedState);
    expect(newsReducer(beforeActionState, startAction)).toMatchSnapshot();
  });

  it('5returns updateNewsSuccess state', () => {
    const news = { 3: {}, 4: {} };
    const lastUpdate = 3;
    const startAction = newsActions.updateNewsSuccess(news, lastUpdate);
    const expectedState = {
      ...beforeActionState,
      cachedNews: news,
      lastUpdate
    };
    expect(newsReducer(beforeActionState, startAction)).toEqual(expectedState);
    expect(newsReducer(beforeActionState, startAction)).toMatchSnapshot();
  });

  it('6returns fetchNewsError state', () => {
    const error = 'error';
    const startAction = newsActions.fetchNewsError(error);
    const expectedState = {
      ...beforeActionState,
      error
    };
    expect(newsReducer(beforeActionState, startAction)).toEqual(expectedState);
    expect(newsReducer(beforeActionState, startAction)).toMatchSnapshot();
  });
});

describe('PUBLISH_NEWS_SUCCESS_STATE', () => {
  const beforeActionState = {
    ...initialState,
    cachedNews: { 1: {}, 2: {} },
    lastUpdate: 2
  };

  it('1returns initial state', () => {
    const action = { type: 'dummy_action' };
    const expectedState = beforeActionState;
    expect(newsReducer(beforeActionState, action)).toEqual(expectedState);
    expect(newsReducer(beforeActionState, action)).toMatchSnapshot();
  });

  it('2returns fetchNewsSuccess state', () => {
    const news = { 3: {}, 4: {} };
    const lastUpdate = 3;
    const startAction = newsActions.fetchNewsSuccess(news, lastUpdate);
    const expectedState = {
      ...beforeActionState,
      cachedNews: news,
      lastUpdate
    };
    expect(newsReducer(beforeActionState, startAction)).toEqual(expectedState);
    expect(newsReducer(beforeActionState, startAction)).toMatchSnapshot();
  });

  it('3returns publishNewsSuccess state', () => {
    const news = { 3: {}, 4: {} };
    const lastUpdate = 3;
    const startAction = newsActions.publishNewsSuccess(news, lastUpdate);
    const expectedState = {
      ...beforeActionState,
      cachedNews: news,
      lastUpdate
    };
    expect(newsReducer(beforeActionState, startAction)).toEqual(expectedState);
    expect(newsReducer(beforeActionState, startAction)).toMatchSnapshot();
  });

  it('4returns deleteNewsSuccess state', () => {
    const news = { 3: {}, 4: {} };
    const lastUpdate = 3;
    const startAction = newsActions.deleteNewsSuccess(news, lastUpdate);
    const expectedState = {
      ...beforeActionState,
      cachedNews: news,
      lastUpdate
    };
    expect(newsReducer(beforeActionState, startAction)).toEqual(expectedState);
    expect(newsReducer(beforeActionState, startAction)).toMatchSnapshot();
  });

  it('5returns updateNewsSuccess state', () => {
    const news = { 3: {}, 4: {} };
    const lastUpdate = 3;
    const startAction = newsActions.updateNewsSuccess(news, lastUpdate);
    const expectedState = {
      ...beforeActionState,
      cachedNews: news,
      lastUpdate
    };
    expect(newsReducer(beforeActionState, startAction)).toEqual(expectedState);
    expect(newsReducer(beforeActionState, startAction)).toMatchSnapshot();
  });

  it('6returns fetchNewsError state', () => {
    const error = 'error';
    const startAction = newsActions.fetchNewsError(error);
    const expectedState = {
      ...beforeActionState,
      error
    };
    expect(newsReducer(beforeActionState, startAction)).toEqual(expectedState);
    expect(newsReducer(beforeActionState, startAction)).toMatchSnapshot();
  });
});
describe('DELETE_NEWS_SUCCESS_STATE', () => {
  const beforeActionState = {
    ...initialState,
    cachedNews: { 1: {}, 2: {} },
    lastUpdate: 2
  };

  it('1returns initial state', () => {
    const action = { type: 'dummy_action' };
    const expectedState = beforeActionState;
    expect(newsReducer(beforeActionState, action)).toEqual(expectedState);
    expect(newsReducer(beforeActionState, action)).toMatchSnapshot();
  });

  it('2returns fetchNewsSuccess state', () => {
    const news = { 3: {}, 4: {} };
    const lastUpdate = 3;
    const startAction = newsActions.fetchNewsSuccess(news, lastUpdate);
    const expectedState = {
      ...beforeActionState,
      cachedNews: news,
      lastUpdate
    };
    expect(newsReducer(beforeActionState, startAction)).toEqual(expectedState);
    expect(newsReducer(beforeActionState, startAction)).toMatchSnapshot();
  });

  it('3returns publishNewsSuccess state', () => {
    const news = { 3: {}, 4: {} };
    const lastUpdate = 3;
    const startAction = newsActions.publishNewsSuccess(news, lastUpdate);
    const expectedState = {
      ...beforeActionState,
      cachedNews: news,
      lastUpdate
    };
    expect(newsReducer(beforeActionState, startAction)).toEqual(expectedState);
    expect(newsReducer(beforeActionState, startAction)).toMatchSnapshot();
  });

  it('4returns deleteNewsSuccess state', () => {
    const news = { 3: {}, 4: {} };
    const lastUpdate = 3;
    const startAction = newsActions.deleteNewsSuccess(news, lastUpdate);
    const expectedState = {
      ...beforeActionState,
      cachedNews: news,
      lastUpdate
    };
    expect(newsReducer(beforeActionState, startAction)).toEqual(expectedState);
    expect(newsReducer(beforeActionState, startAction)).toMatchSnapshot();
  });

  it('5returns updateNewsSuccess state', () => {
    const news = { 3: {}, 4: {} };
    const lastUpdate = 3;
    const startAction = newsActions.updateNewsSuccess(news, lastUpdate);
    const expectedState = {
      ...beforeActionState,
      cachedNews: news,
      lastUpdate
    };
    expect(newsReducer(beforeActionState, startAction)).toEqual(expectedState);
    expect(newsReducer(beforeActionState, startAction)).toMatchSnapshot();
  });

  it('6returns fetchNewsError state', () => {
    const error = 'error';
    const startAction = newsActions.fetchNewsError(error);
    const expectedState = {
      ...beforeActionState,
      error
    };
    expect(newsReducer(beforeActionState, startAction)).toEqual(expectedState);
    expect(newsReducer(beforeActionState, startAction)).toMatchSnapshot();
  });
});

describe('UPDATE_NEWS_SUCCESS_STATE', () => {
  const beforeActionState = {
    ...initialState,
    cachedNews: { 1: {}, 2: {} },
    lastUpdate: 2
  };

  it('1returns initial state', () => {
    const action = { type: 'dummy_action' };
    const expectedState = beforeActionState;
    expect(newsReducer(beforeActionState, action)).toEqual(expectedState);
    expect(newsReducer(beforeActionState, action)).toMatchSnapshot();
  });

  it('2returns fetchNewsSuccess state', () => {
    const news = { 3: {}, 4: {} };
    const lastUpdate = 3;
    const startAction = newsActions.fetchNewsSuccess(news, lastUpdate);
    const expectedState = {
      ...beforeActionState,
      cachedNews: news,
      lastUpdate
    };
    expect(newsReducer(beforeActionState, startAction)).toEqual(expectedState);
    expect(newsReducer(beforeActionState, startAction)).toMatchSnapshot();
  });

  it('3returns publishNewsSuccess state', () => {
    const news = { 3: {}, 4: {} };
    const lastUpdate = 3;
    const startAction = newsActions.publishNewsSuccess(news, lastUpdate);
    const expectedState = {
      ...beforeActionState,
      cachedNews: news,
      lastUpdate
    };
    expect(newsReducer(beforeActionState, startAction)).toEqual(expectedState);
    expect(newsReducer(beforeActionState, startAction)).toMatchSnapshot();
  });

  it('4returns deleteNewsSuccess state', () => {
    const news = { 3: {}, 4: {} };
    const lastUpdate = 3;
    const startAction = newsActions.deleteNewsSuccess(news, lastUpdate);
    const expectedState = {
      ...beforeActionState,
      cachedNews: news,
      lastUpdate
    };
    expect(newsReducer(beforeActionState, startAction)).toEqual(expectedState);
    expect(newsReducer(beforeActionState, startAction)).toMatchSnapshot();
  });

  it('5returns updateNewsSuccess state', () => {
    const news = { 3: {}, 4: {} };
    const lastUpdate = 3;
    const startAction = newsActions.updateNewsSuccess(news, lastUpdate);
    const expectedState = {
      ...beforeActionState,
      cachedNews: news,
      lastUpdate
    };
    expect(newsReducer(beforeActionState, startAction)).toEqual(expectedState);
    expect(newsReducer(beforeActionState, startAction)).toMatchSnapshot();
  });

  it('6returns fetchNewsError state', () => {
    const error = 'error';
    const startAction = newsActions.fetchNewsError(error);
    const expectedState = {
      ...beforeActionState,
      error
    };
    expect(newsReducer(beforeActionState, startAction)).toEqual(expectedState);
    expect(newsReducer(beforeActionState, startAction)).toMatchSnapshot();
  });
});

describe('FETCH_NEWS_ERROR_STATE', () => {
  const beforeActionState = {
    ...initialState,
    error: 'error'
  };

  it('1returns initial state', () => {
    const action = { type: 'dummy_action' };
    const expectedState = beforeActionState;
    expect(newsReducer(beforeActionState, action)).toEqual(expectedState);
    expect(newsReducer(beforeActionState, action)).toMatchSnapshot();
  });

  it('2returns fetchNewsSuccess state', () => {
    const news = { 3: {}, 4: {} };
    const lastUpdate = 3;
    const startAction = newsActions.fetchNewsSuccess(news, lastUpdate);
    const expectedState = {
      ...beforeActionState,
      cachedNews: news,
      lastUpdate,
      error: null
    };
    expect(newsReducer(beforeActionState, startAction)).toEqual(expectedState);
    expect(newsReducer(beforeActionState, startAction)).toMatchSnapshot();
  });

  it('3returns publishNewsSuccess state', () => {
    const news = { 3: {}, 4: {} };
    const lastUpdate = 3;
    const startAction = newsActions.publishNewsSuccess(news, lastUpdate);
    const expectedState = {
      ...beforeActionState,
      cachedNews: news,
      lastUpdate,
      error: null
    };
    expect(newsReducer(beforeActionState, startAction)).toEqual(expectedState);
    expect(newsReducer(beforeActionState, startAction)).toMatchSnapshot();
  });

  it('4returns deleteNewsSuccess state', () => {
    const news = { 3: {}, 4: {} };
    const lastUpdate = 3;
    const startAction = newsActions.deleteNewsSuccess(news, lastUpdate);
    const expectedState = {
      ...beforeActionState,
      cachedNews: news,
      lastUpdate,
      error: null
    };
    expect(newsReducer(beforeActionState, startAction)).toEqual(expectedState);
    expect(newsReducer(beforeActionState, startAction)).toMatchSnapshot();
  });

  it('5returns updateNewsSuccess state', () => {
    const news = { 3: {}, 4: {} };
    const lastUpdate = 3;
    const startAction = newsActions.updateNewsSuccess(news, lastUpdate);
    const expectedState = {
      ...beforeActionState,
      cachedNews: news,
      lastUpdate,
      error: null
    };
    expect(newsReducer(beforeActionState, startAction)).toEqual(expectedState);
    expect(newsReducer(beforeActionState, startAction)).toMatchSnapshot();
  });

  it('6returns fetchNewsError state', () => {
    const error = 'error2';
    const startAction = newsActions.fetchNewsError(error);
    const expectedState = {
      ...beforeActionState,
      error
    };
    expect(newsReducer(beforeActionState, startAction)).toEqual(expectedState);
    expect(newsReducer(beforeActionState, startAction)).toMatchSnapshot();
  });
});
