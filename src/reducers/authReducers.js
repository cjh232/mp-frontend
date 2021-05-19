import { combineReducers } from 'redux'

const initialAuthState = {
    isLogged: false,
    token: '',
    expiry: ''
}

const AuthState = (state = initialAuthState, action) => {
    switch(action.type) {
        case 'UPDATE_PROFILE':

            return {
                isLogged: true,
                name: action.payload.name,
                token: action.payload.token,
                expiry: action.payload.expiry
            }
        case 'CLEAR_PROFILE':
           
            return {
                isLogged: false,
                name: '',
                token: '',
                expiry: ''
            }
        default:
            return state;
    }
}


const StoredEmail = (state = '', action) => {
    switch(action.type) {
        case 'STORE_EMAIL':
            return action.payload;
        default:
            return state
    }
}

const AuthError = (state = {detail: '', error: false}, action) => {
    switch(action.type) {
        case 'LOGIN_ERROR':
            // error.detail = action.payload.detail;
            return {error: true, detail:'changed'}
        default:
            return state;
    }
}

const AuthReducers = combineReducers({AuthState, StoredEmail, AuthError})

export {AuthReducers};
