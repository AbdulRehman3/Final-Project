const router = require('express').Router();
const authController = require('../controllers/authController');

// Test route, for testing the API connection
router.get('/hello', (req, res) => {
	return res.status(200).json({ status: 200, message: ' hello front server' });
});

// Auth routes
router.post('/auth/signup', authController.signup);
router.post('/auth/signin', authController.signin);

module.exports = router;
