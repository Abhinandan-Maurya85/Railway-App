const express = require('express');
const router = express.Router();
const { signup, login } = require('../controllers/authController');
const { validateSignup, validateLogin } = require('../middleware/validate');
const verifyToken = require('../middleware/auth');

router.post('/signup', validateSignup, signup);
router.post('/login', validateLogin, login);

// Example protected route
router.get('/profile', verifyToken, (req, res) => {
  res.json({ success: true, message: 'Protected route', user: req.user });
});

module.exports = router;