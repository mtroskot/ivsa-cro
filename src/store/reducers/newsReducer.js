import { newsActionTypes } from 'src/constants/actionTypes';

//initialState.cachedNews will be a 'object array', e.g {a:{},b:{},c:{}}
export const initialState = {
  cachedNews: {},
  lastUpdate: 0,
  error: null
};

const newsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case newsActionTypes.FETCH_NEWS_SUCCESS:
    case newsActionTypes.PUBLISH_NEWS_SUCCESS:
    case newsActionTypes.DELETE_NEWS_SUCCESS:
    case newsActionTypes.UPDATE_NEWS_SUCCESS:
      return {
        ...state,
        cachedNews: payload.news,
        lastUpdate: payload.lastUpdate,
        error: null
      };
    case newsActionTypes.FETCH_NEWS_ERROR:
      return {
        ...state,
        error: payload.error
      };
    default:
      return state;
  }
};

export default newsReducer;
