import * as types from './userAction';

export function login(id, password) {
    return {
        types : types.login(id, password)
    }
}