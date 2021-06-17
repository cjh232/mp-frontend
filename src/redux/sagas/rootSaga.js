import { all } from 'redux-saga/effects';
import {
  loginWatcherSaga,
  logoutWatcherSaga,
  // import other watchers from this file
} from './authSaga';

import { searchWatcherSaga } from './searchSaga';
import { productDetailsWatcherSaga, shopLoadWatcherSaga } from './productSagas'



// import watchers from other files
export default function* rootSaga() {
  yield all([
    loginWatcherSaga(),
    logoutWatcherSaga(),
    searchWatcherSaga(),
    productDetailsWatcherSaga(),
    shopLoadWatcherSaga(),
    // add other watchers to the array
  ]);
}