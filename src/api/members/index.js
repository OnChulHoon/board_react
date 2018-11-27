const Router = require('koa-router');
const memberCtrl = require('./Member.ctrl');

const members = new Router();

// const printInfo = (ctx) => {
//     ctx.body = {
//         method: ctx.method,
//         path: ctx.path,
//         params: ctx.params,
//     };
// };
//
// members.get('/', printInfo);

members.post('/sjgnupmember', memberCtrl.register);
//
members.get('/', memberCtrl.read);
//
// members.delete('/:id', memberCtrl.remove);
//
// members.patch('/:id', memberCtrl.update);

module.exports = members;