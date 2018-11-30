const router = require('express').Router();
const controller = require('./member.controller');

router.get('/list', controller.list)
router.post('/assign-admin/:memberId', controller.assignAdmin)

module.exports = router;
