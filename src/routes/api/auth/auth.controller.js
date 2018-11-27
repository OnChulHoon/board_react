const Member = require('../../../models/Member');

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