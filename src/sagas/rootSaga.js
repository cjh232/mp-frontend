import { all } from 'redux-saga/effects';
import {
  loginWatcherSaga,
  logoutWatcherSaga,
  // import other watchers from this file
} from './sessionSaga';

import { searchWatcherSaga } from './searchSaga';



// import watchers from other files
export default function* rootSaga() {
  yield all([
    loginWatcherSaga(),
    logoutWatcherSaga(),
    searchWatcherSaga(),
    // add other watchers to the array
  ]);
}