export const LOGIN = 'LOGIN';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = (userId, password) => {
    console.log("[action-userAction] login(userId, password): ", userId + ',', password);
    return {
        type: LOGIN,
        promise: { method: "post", url: '/api/auth/login/local', data: { userId, password } }
    };
};