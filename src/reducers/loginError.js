const LoginError = (state = {detail: '', error: false}, action) => {
    switch(action.type) {
        case 'LOGIN_ERROR':
            // error.detail = action.payload.detail;
            return {error: true, detail:'changed'}
        default:
            return state;
    }
}

export default LoginError;