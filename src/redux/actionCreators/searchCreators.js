// Worker triggering actionCreators

export function searchWatcher(query) {
    return {type: 'SEARCH_REQUESTED', payload: query}
}
  
export function loadSearchResults(params) {
    return {type: 'SEARCH_RESULTS', payload: params}
}