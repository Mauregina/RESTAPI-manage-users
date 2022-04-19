const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    user: {type: String, required: true, unique: true, lowercase: true},
    password: {type: String, required: true, select: false},
    created: {type: Date, default: Date.now}
}, { collection: 'user' })

module.exports = mongoose.model('User', UserSchema)