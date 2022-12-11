const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookSchema = new Schema({
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
    },
    bookName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100,
    },
    bookDesc: {
        type: String,
        required: false,
        minlength: 20,
        maxlength: 500,
    },
    amount: {
        type: Number,
        required: true,
    },
}, {timestamps: true}
);

module.exports  = mongoose.model('Book', BookSchema);