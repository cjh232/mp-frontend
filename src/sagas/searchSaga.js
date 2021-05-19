import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import { loadSearchResults } from '../actionCreators/session';


function searchApi(query) {
    const encodedQuery = encodeURIComponent(query);
    const url = `http://localhost:8000/products/search?q=${encodedQuery}`

    return axios.request({
        method: 'get',
        url: url,
    });
}

function* searchEffectSaga(action) {
    try {
        const {query, history}  = action.payload;

        let { data } = yield call(searchApi, query);

        yield put(loadSearchResults({results: data, query}))
        history.push('/search');

    } catch (e) {
        console.log('error', e.response);

    }
}


export function* searchWatcherSaga() {
    yield takeLatest('SEARCH_REQUESTED', searchEffectSaga)
}