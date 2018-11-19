import { login, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/userAction';

const initialState = {
    isLoggedIn: false,
    fetchingUpdate: false,
    user: {}
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                fetchingUpdate: true
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                fetchingUpdate: false,
                isLoggedIn: true,
                user: action.result,
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                fetchingUpdate: false
            };
        default:{
            return state
        }
    }
};
export  default userReducer;