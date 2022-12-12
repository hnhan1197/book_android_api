const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const FollowSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    book: {
        type: Schema.Types.ObjectId,
        ref: 'Book',
    },
}, {timestamps: true}
);

module.exports  = mongoose.model('Follow', FollowSchema);