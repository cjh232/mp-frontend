// Worker triggering actionCreators

export function productFetchWatcher(productId) {
    return {type: 'PRODUCT_REQUESTED', payload: productId}
}
  
export function loadProductDetails(productDetails) {
    return {type: 'PRODUCT_DETAILS', payload: productDetails}
}

export function setProductLoaded(isLoaded) {
    return {type: 'LOADING_DETAILS', payload: isLoaded}
}