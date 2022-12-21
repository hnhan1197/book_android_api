const middleware = require('../controllers/middleware');
const receiptController = require('../controllers/receiptController');

const router = require('express').Router();

router.post('/', middleware.verifyToken, receiptController.createReceipt);

module.exports = router;