import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import {updateAuthState, setAuthError, clearAuthState, storeUserEmail} from '../actionCreators/authCreators';

/** function that returns an axios call */
function loginApi (authParams) {
    return axios.request({
        method: 'post',
        url: 'http://localhost:8000/users/login',
        data: authParams,
        withCredentials: true
    });
}

function logoutApi () {
    return axios.request({
        method: 'post',
        url: 'http://localhost:8000/users/logout',
        withCredentials: true
    });
}

/** saga worker that is responsible for the side effects */
function* loginEffectSaga(action) {
    try {

        // History is given in the payload to redirect after success.
        const {email, password, rememberUser, history} = action.payload;

        let { data } = yield call(loginApi, {email, password});

        yield put(updateAuthState({token: data.access_token, name: data.first_name, expiry: '2'}))

        if(rememberUser) {
            yield put(storeUserEmail(email))
        }

        history.push('/home');

    } catch (e) {
        console.log('error', e.response)
        yield put(setAuthError({detail: e.response.data.detail}))
    }

}


function* logoutEffectSaga(action) {
    console.log('request logout')
    const {history} = action.payload;
    yield put(clearAuthState({access_token: 'access_token'}))

    try {
        yield call(logoutApi);
    } catch {
        console.log('Error when accessing logout route.')
    }
    

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
