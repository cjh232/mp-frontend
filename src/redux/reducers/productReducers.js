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

const ProductList = (state = [], action) => {
    switch(action.type) {
        case'LOAD_PRODUCTS':
            return action.payload
        default:
            return state;
    }
}

const initialOptions = {
    category: '',
    sizes: [],
    colors: []
}


const FilterOptions = (state = initialOptions, action) => {
    switch(action.type) {
        case 'LOAD_FILTER_OPTIONS':
            return {
                category: action.payload.category,
                sizes: action.payload.sizes,
                colors: action.payload.colors
            }
        default:
            return state;
    }
}

const CategoryList = (state = [], action) => {
    switch(action.type) {
        case 'LOAD_CATEGORIES':
            return action.payload
        default:
            return state;
    }
}


const ProductReducers = combineReducers({ProductDetails, ProductList, FilterOptions, CategoryList})

export {ProductReducers};