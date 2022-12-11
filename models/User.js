const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: false,
        minlength: 6,
        maxlength: 100,
    },
    email: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 50,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    }
}, {timestamps: true}
);

module.exports  = mongoose.model('User', UserSchema);