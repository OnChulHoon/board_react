const router = require('express').Router();
const authMiddleware = require('../../middlewares/auth');
const auth = require('./auth');
const member = require('./member');
//const controller = require('./member/member.controller');

router.use('/auth', auth)
router.use('/member', authMiddleware)
router.use('/member', member)
// router.get('/list', controller.list)
// router.post('/assign-admin/:memberId', controller.assignAdmin())


module.exports = router;