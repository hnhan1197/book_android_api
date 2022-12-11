const middlewareController = require('../controllers/middlewareController');
const userController = require('../controllers/userController');

const router = require('express').Router();

router.get('/', userController.getAll).delete('/:id', userController.delete);

module.exports = router;
