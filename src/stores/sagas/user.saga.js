import {
    delay,
    put,
    takeEvery
} from 'redux-saga/effects'
import { fetchUserRegisterAction, fetchUserRegisterActionFailed, fetchUserRegisterActionSuccess, loginAction, 
    loginActionFailed, 
    loginActionSuccess, 
    // logoutAction, 
    // logoutActionFailed, 
    // logoutActionSuccess, 
    registerAction, 
    registerActionFailed, 
    registerActionSuccess, 
} from '../slices/user.slice.js';
import { AuthAPI } from '../../api';
import { toast } from 'react-toastify';

function* login(action) {
    try {
        const loginPayload = action.payload
        // console.log(action.payload);
        const response = yield AuthAPI.login({
            email: loginPayload.email,
            password: loginPayload.password,
        });
        yield put(loginActionSuccess(response.data.user));
        return toast.success("Login successfully");
    } catch (e) {
        yield put(loginActionFailed(e.response.data));
    }
}

function* register(action) {
    try {
        const loginPayload = action.payload
        // console.log(action.payload);
        const response = yield AuthAPI.register({
            email: loginPayload.email,
            password: loginPayload.password,
        });
        yield put(registerActionSuccess(response.data.user));
        return toast.success("Register successfully");
    } catch (e) {
        console.log("error", e);
        yield put(registerActionFailed(e.response.data));
    }
}

function* fetchUserRegister(action) {
    try {
      yield delay(1000);
      const response = yield AuthAPI.fetchUserRegister(action.payload);
      const productData = response.data;
      const totalProduct = response.headers["x-total-count"];
  
      // Put 1 action đã được định nghĩa ở slice
      yield put(
        fetchUserRegisterActionSuccess({
          data: productData,
          totalProduct: totalProduct,
        })
      );
    } catch (e) {
      // Put 1 action đã được định nghĩa ở slice
      yield put(fetchUserRegisterActionFailed(e.response.data));
    }
  }
export function* userSaga() {
    yield takeEvery(loginAction, login);
    yield takeEvery(registerAction, register);
    yield takeEvery(fetchUserRegisterAction, fetchUserRegister);
}