const errorHandler = (err, req, res, next) => {
 console.error('❌ Error:', err.message);

 // Mongoose validation error
 if (err.name === 'ValidationError') {
   const messages = Object.values(err.errors).map(e => e.message);
   return res.status(400).json({ success: false, message: messages.join(', ') });
 }

 // Mongoose duplicate key error (email or uniqueId already exists)
 if (err.code === 11000) {
   const field = Object.keys(err.keyValue)[0];
   return res.status(400).json({ success: false, message: `${field} already exists` });
 }

 // JWT error
 if (err.name === 'JsonWebTokenError') {
   return res.status(401).json({ success: false, message: 'Invalid token' });
 }

 // Default server error
 res.status(err.status || 500).json({
   success: false,
   message: err.message || 'Internal Server Error',
 });
};

module.exports = errorHandler;