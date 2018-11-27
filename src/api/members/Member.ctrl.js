const Member = require('../../models/Member');

exports.register = async (ctx) => {
    const { id, password, email, nickname, phoneNumber } = ctx.request.body;

    const member = new Member({
        id, password, email, nickname, phoneNumber
    });

    try{
        await member.save();
        ctx.body = member;
    } catch(e) {
        ctx.throw(e, 500);
    }

};

exports.read = async (ctx) => {
    try{
        const members = await Member.find().exec();
        ctx.body = members;
    }catch(e){
        ctx.throw(e, 500);
    }
};

exports.remove = (ctx) => {

};

exports.update = (ctx) => {

};