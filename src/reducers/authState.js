const initialAuthState = {
    isLogged: false,
    access_token: ''
}

const authState = (state = initialAuthState, action) => {
    switch(action.type) {
        case 'UPDATE_PROFILE':
            return {
                isLogged: true,
                access_token: action.payload.access_token
            }
        case 'CLEAR_PROFILE':
            return {
                isLogged: false,
                access_token: ''
            }
        default:
            return state;
    }
}


export default authState;
