import * as listUserType from '../constants/list.user'

const initialState = {
    listUser: [],
    loading: false,
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case listUserType.GET_USERS: {
            return {
                ...state,
                listUser: [],
            }
        }
        case listUserType.GET_USERS_SUCCESS: {
            const { data } = action.payload;
            return {
                ...state,
                listUser: data,
            }
        }
        case listUserType.GET_USERS_SUCCESS: {
            return {
                ...state,
                listUser: [],
            }
        }
    }
}

export default rootReducer;