import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import { loadProductDetails, setProductLoaded } from '../actionCreators/productCreators'

/** function that returns an axios call */
function productDetailsApi (productId) {

    const url = `http://localhost:8000/products/${productId}`

    return axios.request({
        method: 'get',
        url: url,
        withCredentials: true
    });
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

        yield put(loadProductDetails(productDetails))
        yield put(setProductLoaded({isLoaded: true}))

    } catch (error) {
        console.log(error)
    }
}


export function* productDetailsWatcherSaga() {
    yield takeLatest('PRODUCT_REQUESTED', productDetailsEffectSaga);
}