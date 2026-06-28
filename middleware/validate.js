const validateSignup = (req, res, next) => {
 const { name, email, phone, password, college, branch } = req.body;

 // Check required fields
 if (!name || !email || !phone || !password || !college || !branch) {
   return res.status(400).json({
     success: false,
     message: 'Name, email, phone, password, college and branch are required',
   });
 }

 // Email format
 const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 if (!emailRegex.test(email)) {
   return res.status(400).json({ success: false, message: 'Invalid email format' });
 }

 // Phone must be 10 digits
 const phoneRegex = /^[0-9]{10}$/;
 if (!phoneRegex.test(phone)) {
   return res.status(400).json({ success: false, message: 'Phone must be 10 digits' });
 }

 // Password length
 if (password.length < 6) {
   return res.status(400).json({ success: false, message: 'Password must be at least 6 characters' });
 }

 // Name should not be just numbers
 if (/^[0-9]+$/.test(name)) {
   return res.status(400).json({ success: false, message: 'Name cannot be only numbers' });
 }

 next(); // all good, move to controller
};

const validateLogin = (req, res, next) => {
 const { uniqueId, password } = req.body;

 if (!uniqueId || !password) {
   return res.status(400).json({ success: false, message: 'Unique ID and password are required' });
 }

 // UniqueId format check e.g. RSI2025-001
 const idRegex = /^RSI2025-\d{3}$/;
 if (!idRegex.test(uniqueId)) {
   return res.status(400).json({ success: false, message: 'Invalid ID format. Example: RSI2025-001' });
 }

 next();
};

module.exports = { validateSignup, validateLogin };