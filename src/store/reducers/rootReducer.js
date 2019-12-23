import { combineReducers } from 'redux';
import userReducer from 'src/store/reducers/userReducer';
import localeReducer from 'src/store/reducers/localeReducer';
import newsReducer from 'src/store/reducers/newsReducer';
import uiReducer from 'src/store/reducers/uiReducer';

const rootReducer = combineReducers({
  user: userReducer,
  locale: localeReducer,
  news: newsReducer,
  ui: uiReducer
});

export default rootReducer;
