const Book = require('../models/Book');

const bookController = {
    getAllBook: async (req, res) => {
        try {
            const books = await Book.find().select('-__v').populate({ path: 'user', select: 'username' });
            console.log("call success");
            return res.status(200).json(books);
        } catch (error) {
            return res.status(500).json({ message: 'Lỗi server' });
        }
    },
    getAllBookByUser: async (req, res) => {
        try {
            const books = await Book.find({user: req.user}).select('-__v').populate({ path: 'user', select: 'username' });
            return res.status(200).json(books);
        } catch (error) {
            return res.status(500).json({ message: 'Lỗi server' });
        }
    },
    getOneBook: async (req, res) => {
        try {
            const book = await Book.findById(req.params.BookId).select('-__v').populate({ path: 'user', select: 'username' });
            return res.status(200).json(book);
        } catch (error) {
            return res.status(500).json({ message: 'Lỗi server' });
        }
    },
    addABook: async (req, res) => {
        try {
            const {bookName, bookImg, bookDesc, price} = req.body;
            const newBook = new Book({bookName: bookName, bookImg: bookImg, bookDesc: bookDesc, price: price, user: req.user});
            await newBook.save();
            console.log(newBook);
            return res.status(200).json({ message: 'Thêm sách thành công' });
        } catch (error) {
            return res.status(500).json({ message: 'Lỗi server' });
        }
    },
    editABook: async (req, res) => {
        try {
            const {bookName, bookImg, bookDesc, price} = req.body;
            const book = await Book.findByIdAndUpdate( req.params.BookId, {bookName, bookImg, bookDesc, price});
            console.log(book);
            return res.status(200).json({ message: 'Sửa thông tin sách thành công' });
        } catch (error) {
            return res.status(500).json({ message: 'Lỗi server' });
        }
    },
    deleteABook: async (req, res) => {
        try {
            await Book.findByIdAndDelete(req.params.BookId);
            return res.status(200).json({ message: 'Xóa sách thành công' });
        } catch (error) {
            return res.status(500).json({ message: 'Lỗi server' });
        }
    },
}

module.exports = bookController;