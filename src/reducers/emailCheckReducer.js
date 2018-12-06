import { EMAILCHECK_REQUEST, EMAILCHECK_SUCCESS, EMAILCHECK_FAILURE } from '../actions/accountAction';

const defaultState = {
    isExistEmail: false,
    fetchingUpdate: false,
    user: {}
};

const emailCheckReducer = (state = defaultState, action) => {
    switch (action.type) {
        case EMAILCHECK_REQUEST:
            return {
                ...state,
                fetchingUpdate: true
            };
        case EMAILCHECK_SUCCESS:
            return {
                ...state,
                fetchingUpdate: false,
                isExistEmail: true,
                user: action.result,
            };
        case EMAILCHECK_FAILURE:
            return {
                ...state,
                fetchingUpdate: false
            };
        default :{
            return state
        }
    }
};

export default emailCheckReducer;