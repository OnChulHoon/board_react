import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import signupReducer from './signupReducer';
import idCheckReducer from './idCheckReducer';
import emailCheckReducer from './emailCheckReducer';


const reducers = combineReducers({
    userLogin : loginReducer,
    userSignup : signupReducer,
    checkedId : idCheckReducer,
    checkedEmail : emailCheckReducer,
});

export default reducers;