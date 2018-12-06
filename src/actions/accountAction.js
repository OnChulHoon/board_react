export const LOGIN = 'LOGIN';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const SIGNUP = 'SIGNUP';
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export const IDCHECK= 'IDCHECK';
export const IDCHECK_REQUEST = 'IDCHECK_REQUEST';
export const IDCHECK_SUCCESS = 'IDCHECK_SUCCESS';
export const IDCHECK_FAILURE = 'IDCHECK_FAILURE';

export const EMAILCHECK= 'EMAILCHECK';
export const EMAILCHECK_REQUEST = 'EMAILCHECK_REQUEST';
export const EMAILCHECK_SUCCESS = 'EMAILCHECK_SUCCESS';
export const EMAILCHECK_FAILURE = 'EMAILCHECK_FAILURE';


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

export const userIdCheck = (userId) => {
    // console.log("[action-accountAction] userIdCheck(userId): ", userId);
    return {
        type: IDCHECK,
        promise: { method: "post", url: '/api/auth/id-check', data: { userId } }
    };
};

export const userEmailCheck = (email) => {
    // console.log("[action-accountAction] userIdCheck(userId): ", userId);
    return {
        type: EMAILCHECK,
        promise: { method: "post", url: '/api/auth/email-check', data: { email } }
    };
};
