import { all, fork } from 'redux-saga/effects';
import { productSaga } from './product.saga';
import { userSaga } from './user.saga';


export function* mySaga() {
    console.log('saga run');
    yield all([
        fork(userSaga), fork(productSaga)
    ]);
}