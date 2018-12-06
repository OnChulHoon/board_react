export const LOGIN = 'LOGIN';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const SIGNUP = 'SIGNUP';
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export const login = (userId, password) => {
    // console.log("[action-accountAction] login(userId, password): ", userId + ',', password);
    return {
        type: LOGIN,
        promise: { method: "post", url: '/api/auth/login/local', data: { userId, password } }
    };
};

export const signup = (userId, password, username, email, nickname, phoneNumber, countryCode) => {
    // console.log("[action-accountAction] signup : ", userId, password, username, email, nickname, phoneNumber, countryCode);
    return {
        type: SIGNUP,
        promise: { method: "post", url: '/api/auth/register/local',
            data: { userId, password, username, email, nickname, phoneNumber, countryCode } }
    };
};
