import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from '../actions/accountAction';

const defaultState = {
    signupSuccess: false,
    fetchingUpdate: false,
    signup: {}
};

const signupReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SIGNUP_REQUEST:
            return {
                ...state,
                fetchingUpdate: true
            };
        case SIGNUP_SUCCESS:
            return {
                ...state,
                fetchingUpdate: false,
                signupSuccess: true,
                signup: action.result,
            };
        case SIGNUP_FAILURE:
            return {
                ...state,
                fetchingUpdate: false
            };
        default :{
            return state
        }
    }
};

export default signupReducer;