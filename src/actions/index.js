import * as types from './userAction';

export function login(userId, password) {
    return {
        types : types.login(userId, password)
    }
}