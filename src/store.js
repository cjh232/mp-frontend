import rootSaga from './sagas/rootSaga';
import rootReducer from './reducers/rootReducer';
import createSagaMiddleware from 'redux-saga';

import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from "redux-persist";
import { composeWithDevTools } from 'redux-devtools-extension';

import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger'


/** Saga Middleware */
const sagaMiddleware = createSagaMiddleware();

/** Create middlewares for redux */
let middlewares = applyMiddleware(sagaMiddleware, logger);


const persistConfig = {
  key: 'root',
  storage,
  blacklist: [
    'LoginError'
  ]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = createStore(persistedReducer, {}, composeWithDevTools(
    middlewares,
    // other store enhancers if any
  ));

const  persistor = persistStore(store);

/** run saga watchers */
sagaMiddleware.run(rootSaga);


export {store, persistor};
