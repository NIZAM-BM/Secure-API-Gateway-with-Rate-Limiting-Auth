const express = require('express');
const router = express.Router();

const authMiddleware = require('../middleware/authMiddleware');
const limiter = require('../middleware/rateLimiter');
const { getData } = require('../controllers/apiController');

router.get('/data', authMiddleware, limiter, getData);

module.exports = router;