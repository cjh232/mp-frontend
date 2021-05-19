const initialState = {
    results: [],
    query: ''
}


const SearchReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SEARCH_RESULTS':
            // error.detail = action.payload.detail;
            return {
                results: action.payload.results,
                query: action.payload.query
            }
        default:
            return state;
    }
}

export default SearchReducer;