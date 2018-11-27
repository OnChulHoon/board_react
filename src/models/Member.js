const mongoose = require('mongoose');

const Schema = mongoose.Schema

const MemberSchema = new Schema({
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

MemberSchema.statics.create = function(memberId, password, email, nickname, phoneNumber, registerDate) {
    const member = new this({
        memberId,
        password,
        email,
        nickname,
        phoneNumber,
        registerDate
    });

    return member.save()

}

MemberSchema.statics.findOneByMemberId = function(memberId) {
    return this.findOne({
        memberId
    });
}

module.exports = mongoose.model('Member', MemberSchema);