import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import { 
    saveProductDetails, 
    setProductLoaded, 
    saveProductList, 
    saveCategory 
} from '../actionCreators/productCreators'

/** function that returns an axios call */
function productDetailsApi (productId) {

    const url = `http://localhost:8000/products/details/${productId}`

    return axios.request({
        method: 'get',
        url: url,
        withCredentials: true,
    });
}

function productListApi (params) {
 
    const url = `http://localhost:8000/products/list/`

    return axios.request({
        method: 'get',
        url: url,
        withCredentials: true,
        params: params
    });
}

function categoryApi (category) {
    const url = `http://localhost:8000/products/categories/${category}/`

    return axios.request({
        method: 'get',
        url: url,
        withCredentials: true,
    })
}


function* productDetailsEffectSaga(action) {
    try {

        const productId = action.payload;
        console.log(productId);

        yield put(setProductLoaded({isLoaded: false}))

        let { data } = yield call(productDetailsApi, productId)
        console.log(data)

        const productDetails = {
            id: data.id,
            availableColors: data.available_colors,
            brand: data.brand,
            categoryName: data.category_name,
            isAvailable: data.is_available,
            subCategoryName: data.sub_category_name,
            title: data.title,
            details: data.details
        }

        yield put(saveProductDetails(productDetails))
        yield put(setProductLoaded({isLoaded: true}))

    } catch (error) {
        console.log(error)
    }
}

function* shopDetailsEffectSaga(action) {
    try {
        const category = action.payload;

        // Get all the products listed under the given category
        let productsResponse = yield call(productListApi, {category: category})
        const products = productsResponse.data

        // Get all the subcategories listed under the given category
        let categoryResponse = yield call(categoryApi, category)
        const categories = categoryResponse.data

        // Save all the information in reducer
        yield put(saveProductList(products))
        yield put(saveCategory(categories))

    } catch (error) {
        console.log(error)
    }
}


export function* productDetailsWatcherSaga() {
    yield takeLatest('FETCH_PRODUCT_DETAILS', productDetailsEffectSaga);
}

export function* shopDetailsWatcherSaga() {
    yield takeLatest('FETCH_SHOP_DETAILS', shopDetailsEffectSaga)
}