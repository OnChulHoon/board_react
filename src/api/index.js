const Router = require('koa-router');
const members = require('./members');

const api = new Router();

api.use('./members', members.routes());

module.exports = api;