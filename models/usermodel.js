const mongooes = require('mongoose')
const userSchema = new mongooes.Schema({
    userNmae: {
        type: String,
        required: [true, 'user name is required']
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'password is required']
    },
    address: {
        type: Array,

    },
    phone: {
        type: String,
        required: [true, 'user type is required']
    },
    usertype: {
        type: String,
        required: [true, 'user type is required'],
        default: 'client',
        enum: ['client', 'admin', 'vender']
    },
    profile: {
        type: String,
        default: null
    }
}, { timestamps: true })
module.exports = mongooes.model("User",userSchema)

