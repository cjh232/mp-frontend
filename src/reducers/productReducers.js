import { combineReducers } from 'redux'

const initialState = {
    id: '',
    brand: '',
    availableColors: [],
    categoryName: '',
    isAvailable: true,
    subCategoryName: '',
    title: '',
    loaded: false
}


const ProductDetails = (state = initialState, action) => {
    switch(action.type) {
        case 'PRODUCT_DETAILS':
            // error.detail = action.payload.detail;
            return {
                id: action.payload.id,
                brand: action.payload.brand,
                availableColors: action.payload.availableColors,
                categoryName: action.payload.categoryName,
                isAvailable: action.payload.isAvailable,
                subCategoryName: action.payload.subCategoryName,
                title: action.payload.title,
                details: action.payload.details
            }
        case 'LOADING_DETAILS':
            return {
                ...state,
                loaded: action.payload.isLoaded
            }
        default:
            return state;
    }
}


const ProductReducers = combineReducers({ProductDetails})

export {ProductReducers};