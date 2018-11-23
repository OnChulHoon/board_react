export const LOGIN = 'LOGIN';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = (id, pw) => {
    console.log("[action-userAction] login(id, pw): ", id + ',', pw);
    return {
        type: LOGIN,
        promise: { method: "post", url: '/login', data: { id, pw } }
    };
};