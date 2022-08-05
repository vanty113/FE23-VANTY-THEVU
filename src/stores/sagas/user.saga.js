import {
    put,
    takeEvery
} from 'redux-saga/effects'
import { loginAction, 
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

function* login(action) {
    try {
        const loginPayload = action.payload
        // console.log(action.payload);
        const response = yield AuthAPI.login({
            email: loginPayload.email,
            password: loginPayload.password,
        });
        // console.log(response.data.user); 
        yield put(loginActionSuccess(response.data.user));
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
        // console.log(response.data.user); 
        yield put(registerActionSuccess(response.data.user));
    } catch (e) {
        console.log("error", e);
        yield put(registerActionFailed(e.response.data));
    }
}

export function* userSaga() {
    yield takeEvery(loginAction, login);
    yield takeEvery(registerAction, register);
}