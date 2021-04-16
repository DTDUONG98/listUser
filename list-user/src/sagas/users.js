import { fork, take, call, put } from 'redux-saga/effects'
import * as listUserConstants from '../constants/list.user'
import { getListUsers } from '../apis/users';
import { getListError, getListSuccess } from '../actions/users';
import _ from 'lodash'



function* watchFetchListUser() {
    while (true) {
        try {
            yield take(listUserConstants.GET_USERS);
            const response = yield call(getListUsers);
            const data = _.get(response, "data.results", [])
            yield put(getListSuccess(data))
        } catch (error) {
            yield put(getListError(error))
        }
    }
}


function* rootSaga() {
    yield fork(watchFetchListUser);
}

export default rootSaga;