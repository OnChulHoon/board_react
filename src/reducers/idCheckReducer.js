import { IDCHECK_REQUEST, IDCHECK_SUCCESS, IDCHECK_FAILURE } from '../actions/accountAction';

const defaultState = {
    isExistId: false,
    fetchingUpdate: false,
    user: {}
};

const idCheckReducer = (state = defaultState, action) => {
    switch (action.type) {
        case IDCHECK_REQUEST:
            return {
                ...state,
                fetchingUpdate: true
            };
        case IDCHECK_SUCCESS:
            return {
                ...state,
                fetchingUpdate: false,
                isExistId: true,
                user: action.result,
            };
        case IDCHECK_FAILURE:
            return {
                ...state,
                fetchingUpdate: false
            };
        default :{
            return state
        }
    }
};

export default idCheckReducer;