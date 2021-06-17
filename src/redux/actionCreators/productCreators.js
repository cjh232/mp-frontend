// Worker triggering actionCreators

export function productFetchWatcher(productId) {
    return {type: 'PRODUCT_REQUESTED', payload: productId}
}

export function shopLoadWatcher(category) {
    return {type: 'SHOP_INIT', payload: category}
}

export function getCategoryListWatcher(category) {
    return {type: 'GET_CATEGORIES', payload: category}
}

export function loadCategoryList(list) {
    return {type: 'LOAD_CATEGORIES', payload: list}
}
  
export function loadProductDetails(productDetails) {
    return {type: 'PRODUCT_DETAILS', payload: productDetails}
}

export function setProductLoaded(isLoaded) {
    return {type: 'LOADING_DETAILS', payload: isLoaded}
}

export function loadProductList(productList) {
    return {type: 'LOAD_PRODUCTS', payload: productList}
}