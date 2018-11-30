const mongoose = require('mongoose');

const Schema = mongoose.Schema

const crypto = require('crypto');
const config = require('../../config');

const Member = new Schema({
    memberId: String,
    password: String,
    email: String,
    nickname: String,
    phoneNumber: String,
    registerDate: {
        type: Date,
        default: new Date()
   },
    admin: { type: Boolean, default: false }
});

Member.statics.create = function(memberId, password, email, nickname, phoneNumber, registerDate) {

    const encrypted = crypto.createHmac('sha1' , config.secret)
        .update(password)
        .digest('base64')

    const member = new this({
        memberId,
        password : encrypted,
        email,
        nickname,
        phoneNumber,
        registerDate
    });

    return member.save()

}

Member.statics.findOneByMemberId = function(memberId) {
    return this.findOne({
        memberId
    }).exec()
}

Member.methods.verify = function(password) {
    const encrypted = crypto.createHmac('sha1', config.secret)
        .update(password)
        .digest('base64')
    console.log('password check : ', this.password === encrypted);

    return this.password === encrypted
}

Member.methods.assignAdmin = function() {
    this.admin = true
    return this.save()
}

module.exports = mongoose.model('Member', Member);