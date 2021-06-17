// API Fetches

export function productFetchWatcher(productId) {
    return {type: 'FETCH_PRODUCT_DETAILS', payload: productId}
}

export function shopDetailsWatcher(category) {
    return {type: 'FETCH_SHOP_DETAILS', payload: category}
}


// Boolean Flags

export function setProductLoaded(isLoaded) {
    return {type: 'LOADING_DETAILS', payload: isLoaded}
}


// Reducers

export function saveProductDetails(productDetails) {
    return {type: 'SAVE_PRODUCT_DETAILS', payload: productDetails}
}

export function saveCategory(list) {
    return {type: 'SAVE_CATEGORY', payload: list}
}

export function saveProductList(productList) {
    return {type: 'SAVE_PRODUCT_LIST', payload: productList}
}