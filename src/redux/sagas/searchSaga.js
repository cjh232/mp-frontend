import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import { loadSearchResults } from '../actionCreators/searchCreators';

// Function that takes a URI encoded query and fetches results from 
// the backend.
function searchApi(encodedQuery) {
    const url = `http://localhost:8000/products/search?q=${encodedQuery}`

    return axios.request({
        method: 'get',
        url: url,
    });
}

function* searchEffectSaga(action) {
    try {
        const {query, history}  = action.payload;
        const encodedQuery = encodeURIComponent(query);

        let { data } = yield call(searchApi, encodedQuery);

        yield put(loadSearchResults({results: data, query}))

        if(history) {
            history.push(`/search`);
        }

    } catch (e) {
        console.log('error', e.response);

    }
}


export function* searchWatcherSaga() {
    yield takeLatest('SEARCH_REQUESTED', searchEffectSaga)
}