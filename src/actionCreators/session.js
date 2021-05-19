// Worker triggering actionCreators
export function loginWatcher(authParams) {
    return { type: 'LOGIN_REQUESTED', payload: authParams};
  }

export function logoutWatcher(history) {
  return {type: 'LOGOUT_REQUESTED', payload: history}
}

export function searchWatcher(query) {
  return {type: 'SEARCH_REQUESTED', payload: query}
}

export function loadSearchResults(params) {
  return {type: 'SEARCH_RESULTS', payload: params}
}

export function updateAuthState(authState) {
  return {type: 'UPDATE_PROFILE', payload: authState}
}

export function clearAuthState() {
  return {type: 'CLEAR_PROFILE', payload: ''}
}

export function setError(error) {
  return {type: 'LOGIN_ERROR', payload: error};
}

