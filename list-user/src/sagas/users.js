import { fork, take, call, put } from 'redux-saga/effects'

import * as listUserConstants from '../constants/list.user'
import { getListUsers } from '../apis/users';
import { getListError, getListSuccess } from '../actions/users';



function* watchFetchListUser() {
    console.log('AAAAA')
}


function* rootSaga() {
    yield fork(watchFetchListUser);
}

export default rootSaga;