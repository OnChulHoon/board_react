const Member = require('../../../src/models/Member.js');
//const Promise = require('promise');
const jwt = require('jsonwebtoken');

/*
    POST /api/auth/register
    {
        memberId,
        password
    }
 */

exports.register = (req, res) => {
    res.send("this router is working");

    const {
        memberId,
        password,
        email,
        nickname,
        phoneNumber,
        registerDate } = req.body

    let newMember = null

    const create = (member) => {
        if(member) {
            throw new Error('memberId exists!');
        } else {
           return Member.create(
               memberId,
               password,
               email,
               nickname,
               phoneNumber,
               registerDate);
        }
    }

    const count = (member) => {
        newMember = member;
        return Member.count({}).exec()
    }

    const assign = (count) => {
        if(count === 1) {
            return newMember.assignAdmin()
        } else {
            return Promise.resolve(false);
        }
    }

    const respond = (isAdmin) => {
        res.json({
            message: 'registered successfully',
            admin: isAdmin ? true : false
        });
    }

    const onError = (error) => {
        res.status(409).json({
            message: error.message
        });
    }

    Member.findOneByMemberId(memberId)
        .then(create)
        .then(count)
        .then(assign)
        .then(respond)
        .catch(onError)
}

/*
    POST /api/auth/login
    {
        memberId,
        password
    }
*/


exports.login = (req, res) => {
    res.send('login api is working');
    const { memberId, password } = req.body;
    const secret = req.app.get('jwt-secret');

    const check = (Member) => {
        res.send('check member is working');
        if(!Member) {
            throw new Error('login failed!!');
        } else {
            if(Member.verify(password)) {

                const p = new Promise((resolve, reject) => {
                   jwt.sign(
                       {
                           _id: Member._id,
                           memberId: Member.memberId,
                           admin: Member.admin
                       },
                       secret,
                       {
                           expiresIn: '7d',
                           issuer:'localhost',
                           subject: 'userInfo'
                       }, (err, token) => {
                           if (err) reject(err)
                           resolve(token)
                       }
                   )
                });
                return p;
            } else {
                throw new Error ('login failed!!');
            }
        }
    }

    const respond = (token) => {
        res.json({
            message: 'logged in successfully!!',
            token
        });
    }

    const onError = (error) => {
        res.status(403).json({
            message: error.message
        })
    }

    Member.findOneByMemberId(memberId)
        .then(check)
        .then(respond)
        .catch(onError);
}

exports.check = (req, res) => {
    res.json({
        success: true,
        info: req.decoded
    });
}

exports.check = (req, res) => {

    const token = req.headers['x-access-token'] || req.query.token

    if(!token) {
        return res.status(403).json({
            success: false,
            message: 'not logged in'
        });
    }

    const p = new Promise(
        (resolve, reject) => {
            jwt.verify(token, req.app.get('jwt-secret'), (err, decoded) => {
                if(err) reject(err)
                resolve(decoded)
            });
        }
    )

    const respond = (token) => {
        res.json({
            success: true,
            info: token
        });
    }

    const onError = (error) => {
        res.status(403).json({
           success: false,
           message: error.message
        });
    }

    p.then(respond).catch(onError);
}

