import { fork, take, call, put , delay} from 'redux-saga/effects'

import * as listUserType from '../constants/list.user'
import { getListUsers } from '../apis/users';
import { STATUS_CODE } from '../constants/index'
import { fetchListError, fetchListSuccess } from '../actions/users';
import {hideLoading, showLoading} from '../actions/loading';



function* watchFetchListUser() {
    while (true) {
        const action = yield take(listUserType.GET_USERS);
        console.log('ac', action)
        try {
            yield put(showLoading());
            const { params } = action.payload;
            const response = call(getListUsers, params);
            const { data, status } = response;
            if (status == STATUS_CODE.SUCCESS) {
                yield put(fetchListSuccess(data))
            } else {
                yield put(fetchListError(data))
            }
            yield delay(1000);
            yield put(hideLoading());
        }
        catch (e) {
            console.log('e', e)
        }
    }
}


function* rootSaga() {
    yield fork(watchFetchListUser);
}

export default rootSaga;