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
                console.log("[promiseMiddleware] result : ", result);
                if (type === 'LOGIN'){
                    //console.log("[promiseMiddleware] result : ", result);
                    window.sessionStorage.setItem('loginUserId', result.data.userId);
                    //console.log("[promiseMiddleware] sessionStorage : ", window.sessionStorage );
                    const username = result.data.profile.username;
                    next({ ...rest, result, type: `${type}_SUCCESS` });
                    alert('환영합니다! "'+ username +'"님');
                } else if (type === 'SIGNUP'){
                    next({ ...rest, result, type: `${type}_SUCCESS` });
                    alert("회원으로 등록되었습니다! 로그인 하신 후 이용해주세요.:)");
                } else if (type === 'IDCHECK'){
                    next({ ...rest, result, type: `${type}_SUCCESS` });
                    alert("존재하는 아이디 입니다. 다른 아이디로 등록해주세요.");
                }else if (type === 'EMAILCHECK'){
                    next({ ...rest, result, type: `${type}_SUCCESS` });
                    alert("존재하는 이메일 입니다. 다른 이메일로 등록해주세요.");
                }
            })
            .catch(error => {
                next({ ...rest, error, type: `${type}_FAILURE` });
                if (type === 'LOGIN'){
                    console.log(error);
                    alert("아이디 또는 비밀번호가 틀립니다.");
                } else if (type === 'SIGNUP'){
                    console.log(error);
                    alert("회원등록에 실패하였습니다. 관리자에게 문의해주세요.");
                } else if (type === 'IDCHECK'){
                    console.log(error);
                    alert("사용할 수 있는 아이디입니다.");
                } else if (type === 'EMAILCHECK'){
                    console.log(error);
                    alert("사용할 수 있는 이메일입니다.");
                }
            });
    };
};