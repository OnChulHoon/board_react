import axios from 'axios';

export default () => {
    return next => action => {

        const { promise, type, ...rest } = action.types;

        next({ ...rest, type: `${type}_REQUEST` });
        return axios({
            method: promise.method,
            url: promise.url,
            data: promise.data
        })
            .then(result => {
                //console.log("[promiseMiddleware] result : ", result);
                window.sessionStorage.setItem('loginUserId', result.data.userId);
                //console.log("[promiseMiddleware] sessionStorage : ", window.sessionStorage );
                const username = result.data.profile.username;

                next({ ...rest, result, type: `${type}_SUCCESS` });

                if (type === 'LOGIN'){
                    alert('환영합니다! "'+ username +'"님');
                } else if (type === 'SIGNUP'){
                    alert("회원으로 등록되었습니다! 로그인해주세요.:)");
                }
            })
            .catch(error => {
                next({ ...rest, error, type: `${type}_FAILURE` });
                if (type === 'LOGIN'){
                    alert("아이디 또는 비밀번호가 틀립니다.");
                } else if (type === 'SIGNUP'){
                    alert("회원등록에 실패하였습니다. 관리자에게 문의해주세요.");
                }
            });
    };
};