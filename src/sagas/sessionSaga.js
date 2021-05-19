import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import {updateAuthState, setError, clearAuthState} from '../actionCreators/session';

/** function that returns an axios call */
function loginApi (authParams) {
    return axios.request({
        method: 'post',
        url: 'http://localhost:8000/users/login',
        data: authParams,
        withCredentials: true
    });
}

/** saga worker that is responsible for the side effects */
function* loginEffectSaga(action) {
    try {

        // History is given in the payload to redirect after success.
        const {email, password, history} = action.payload;

        let { data } = yield call(loginApi, {email, password});

        // store data to localstorage
        let jwt_token = {token: data.access_token, expiry: '2'}
        localStorage.setItem('jwt_token', JSON.stringify(jwt_token))

        console.log('setting')

        yield put(updateAuthState({access_token: data.access_token}))
        history.push('/home');

    } catch (e) {
        console.log('error', e.response)
        yield put(setError({detail: e.response.data.detail}))
    }

}


function* logoutEffectSaga(action) {
    console.log('request logout')
    const {history} = action.payload;
    
    yield put(updateAuthState({access_token: 'access_token'}))
    history.push('/login')

}


/**
 * saga watcher that is triggered when dispatching action of type 
 * 'LOGIN_WATCHER
 */

export function* loginWatcherSaga() {
    yield takeLatest('LOGIN_REQUESTED', loginEffectSaga);
}

export function* logoutWatcherSaga() {
    yield takeLatest("LOGOUT_REQUESTED", logoutEffectSaga);
}
