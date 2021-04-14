import * as listUserType from '../constants/list.user';

export const fetchListUser = () => {
    return {
        type: listUserType.GET_USERS,
    }
}

export const fetchListSuccess = data => {
    return {
        type: listUserType.GET_USERS_SUCCESS,
        payload: {
            data,
        },
    }
}

export const fetchListError = error => {
    return {
        type: listUserType.GET_USERS_FAIL,
        payload: {
            error,
        },
    }
}