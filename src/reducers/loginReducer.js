import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/accountAction';

const defaultState = {
    isLoggedIn: false,
    fetchingUpdate: false,
    user: {}
};

const loginReducer = (state = defaultState, action) => {
    //console.log("[userReducer]defaultState : ",state);
    //console.log("[userReducer]action : ",action);
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

export default loginReducer;