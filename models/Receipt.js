const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ReceiptSchema = new Schema({
    amount: {
        type: Number
    },
    price: {
        type: Number
    },
    book: {
        type: Schema.Types.ObjectId,
        ref: 'Book',
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
}, {timestamps: true}
);

module.exports  = mongoose.model('Receipt', ReceiptSchema);