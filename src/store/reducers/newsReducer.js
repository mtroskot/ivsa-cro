import { newsActions } from 'src/constants/store/actionTypes';

const intialState = {};

const newsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case newsActions.UPDATE_NEWS_SUCCESS:
    case newsActions.PUBLISH_NEWS_SUCCESS:
      const { date, publishedBy, notice, key } = payload;
      return {
        key,
        date,
        publishedBy,
        notice
      };
    default:
      return state;
  }
};

export default newsReducer;
