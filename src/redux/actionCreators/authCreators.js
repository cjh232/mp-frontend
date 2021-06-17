// Worker triggering actionCreators
export function loginWatcher(authParams) {
    return { type: 'LOGIN_REQUESTED', payload: authParams};
  }

export function logoutWatcher(history) {
  return {type: 'LOGOUT_REQUESTED', payload: history}
}



export function storeUserEmail(email) {
    return {type: 'STORE_EMAIL', payload: email}
}
  
export function updateAuthState(authState) {
    return {type: 'UPDATE_PROFILE', payload: authState}
}

export function clearAuthState() {
    return {type: 'CLEAR_PROFILE', payload: ''}
}

export function setAuthError(error) {
    return {type: 'LOGIN_ERROR', payload: error};
}
  