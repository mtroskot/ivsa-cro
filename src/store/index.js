import { applyMiddleware, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import createEncryptor from 'redux-persist-transform-encrypt';
import AsyncStorage from '@react-native-community/async-storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'src/store/sagas/rootSaga';
import additionalMiddlewares from 'src/store/middlewares';
import rootReducer from 'src/store/reducers/rootReducer';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
// encryption
const encryptor = createEncryptor({
  secretKey: 'mtroskot.ivsa-cro.encrypt',
  onError: function(error) {
    // Handle the error.
    console.log('encryptor error', error);
  }
});

// redux-persist
const persistConfig = {
  key: 'mtroskot.ivsa-cro',
  storage: AsyncStorage,
  blacklist: ['ui'], //  will not be persisted,
  transforms: [encryptor],
  stateReconciler: autoMergeLevel2
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

let persistor = null;

export function getPersistor() {
  return persistor;
}
function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [...additionalMiddlewares, sagaMiddleware];
  const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(...middlewares)));
  persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);
  return store;
}

const store = configureStore();
export default store;
