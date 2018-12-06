import * as types from './accountAction';

export function login(userId, password) {
    return {
        types : types.login(userId, password)
    }
}

export function signup (userId, password, username, email, nickname, phoneNumber, countryCode) {
    return {
        types : types.signup(userId, password, username, email, nickname, phoneNumber, countryCode)
    }
}
