import * as types from './userAction';

export function login(id, pw) {
    return {
        types : types.login(id, pw)
    }
}