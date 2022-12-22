const Receipt = require('../models/Receipt');

const receiptController = {
    getAllReceipt: async (req, res) => {
        try {
            const receipts = await Receipt.find({user: req.user}).select('-__v').populate({ path: 'book user', select: 'bookName bookImg' });
            return res.status(200).json(receipts);
        } catch (error) {
            return res.status(500).json({ message: 'Lỗi server' });
        }
    },
    createReceipt: async (req, res) => {
        try {
            const {book, price} = req.body;
            const newReceipt = new Receipt({book: book, price: price, user: req.user});
            await newReceipt.save();
            return res.status(200).json({message: 'Đặt sách thành công'});
        } catch (error) {
            return res.status(500).json({ message: 'Lỗi server' });
        }
    },
}

module.exports = receiptController;