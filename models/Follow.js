const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const FollowSchema = new Schema({
    email: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 50,
    },
    bookId: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100,
    },
}, {timestamps: true}
);

module.exports  = mongoose.model('Follow', FollowSchema);