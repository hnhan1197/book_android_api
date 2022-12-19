const middleware = require('../controllers/middleware');
const bookController = require('../controllers/bookController');

const router = require('express').Router();

router.get('/', middleware.verifyToken, bookController.getAllBook)
    .get('/getByUser', middleware.verifyToken, bookController.getAllBookByUser)
    .get('/:BookId', middleware.verifyToken, bookController.getOneBook)
    .post('/', middleware.verifyToken, bookController.addABook)
    .put('/:BookId', middleware.verifyToken, bookController.editABook)
    .delete('/:BookId', middleware.verifyToken, bookController.deleteABook);

module.exports = router;