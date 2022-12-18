const middleware = require('../controllers/middleware');
const userController = require('../controllers/userController');

const router = require('express').Router();

router.get('/', middleware.verifyToken, userController.getOne);

module.exports = router;
