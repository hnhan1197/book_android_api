const authController = require('../controllers/authController');
const middlewareController = require('../controllers/middlewareController');

const router = require('express').Router();

router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;