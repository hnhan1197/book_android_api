const middleware = require('../controllers/middleware');
const userController = require('../controllers/userController');

const router = require('express').Router();

router.get('/', userController.getAll).delete('/:id', userController.delete);

module.exports = router;
