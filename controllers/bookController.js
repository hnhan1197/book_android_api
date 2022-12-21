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
            const savedBook = await newBook.save();
            const bookResponse = await Book.findById(savedBook._id).select('-__v').populate({ path: 'user', select: 'username' });
            console.log(bookResponse);
            return res.status(200).json(bookResponse);
        } catch (error) {
            return res.status(500).json({ message: 'Lỗi server' });
        }
    },
    editABook: async (req, res) => {
        try {
            const {bookName, bookImg, bookDesc, price} = req.body;
            await Book.findByIdAndUpdate( req.params.BookId, {bookName, bookImg, bookDesc, price});
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