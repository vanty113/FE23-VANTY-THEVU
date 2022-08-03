import { put, takeEvery, delay } from "redux-saga/effects";
import {
  fetchProductAction,
  fetchProductActionFailed,
  fetchProductActionSuccess,
  searchProductAction,
  searchProductActionFailed,
  searchProductActionSuccess,
} from "stores/slices/product.slice.js";
import { ProductAPI } from "api/product.api.js";

function* fetchProduct(action) {
  try {
    yield delay(1000);
    const response = yield ProductAPI.fetchProduct(action.payload);
    const productData = response.data;
    const totalProduct = response.headers["x-total-count"];

    // Put 1 action đã được định nghĩa ở slice
    yield put(
      fetchProductActionSuccess({
        data: productData,
        totalProduct: totalProduct,
      })
    );
  } catch (e) {
    // Put 1 action đã được định nghĩa ở slice
    yield put(fetchProductActionFailed(e.response.data));
  }
}

function* searchProduct(action) {
  try {
    yield delay(1000);
    const response = yield ProductAPI.searchProduct(action.payload.searchTerm);
    // console.log("response", response.data.length);
    const productData = response.data;
    // console.log("productData: ", productData);
    const totalProduct = response.data.length;
    // console.log('action.payload', action.payload);
    // Put 1 action đã được định nghĩa ở slice
    yield put(
      searchProductActionSuccess({
        data: productData,
        totalProduct: totalProduct,
      })
    );
  } catch (e) {
    // Put 1 action đã được định nghĩa ở slice
    console.log(e);
    yield put(searchProductActionFailed(e.response.data));
  }
}

export function* productSaga() {
  yield takeEvery(fetchProductAction, fetchProduct);
  yield takeEvery(searchProductAction, searchProduct);
}
