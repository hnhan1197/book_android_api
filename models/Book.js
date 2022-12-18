const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookSchema = new Schema({
    bookName: {
        type: String,
        required: true,
    },
    bookImg: {
        type: String
    },
    bookDesc: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
}, {timestamps: true}
);

module.exports  = mongoose.model('Book', BookSchema);