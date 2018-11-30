const Member = require('../../../src/models/Member');

exports.list = (req, res) => {

    if(!req.decoded.admin) {
        return res.status(403).json({
           message: 'you are not an admin'
        });
    }

    Member.find({})
        .then(
            members => {
                res.json({members});
            }
        )
}

exports.assignAdmin = (req, res) => {

    if(!req.decoded.admin) {
        return res.status(403).json({
            message: 'you are not an admin'
        });
    }

    Member.findOneByMemberId(req.params.memberId)
        .then(
            member => member.assignAdmin
        ).then(
            res.json({
                success: true
            })
    )
}