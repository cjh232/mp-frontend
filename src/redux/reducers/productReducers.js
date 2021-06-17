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
        case 'SAVE_PRODUCT_DETAILS':
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

const initialStoreDetails = {
    productList: [],
    category: {name: 'All', children: []},
    sizeList: [],
    brandList: [],
    filters: {
        sizes: [],
        brands: [],
        colors: []
    }
}

const ShopDetails = (state = initialStoreDetails, action) => {
    switch(action.type) {
        case 'SAVE_PRODUCT_LIST':
            return {
                ...state,
                productList: action.payload
            }
        case 'SAVE_CATEGORY_LIST':
            return {
                ...state,
                categoryList: action.payload
            }
        case 'SAVE_CURRENT_CATEGORY':
            return {
                ...state,
                category: action.payload
            }
        default:
            return state;
    }
}



const ProductReducers = combineReducers({
    ProductDetails, 
    ShopDetails
})

export {ProductReducers};