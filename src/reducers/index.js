import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import signupReducer from './signupReducer';

const reducers = combineReducers({
    userLogin : loginReducer,
    userSignup : signupReducer,
});

export default reducers;