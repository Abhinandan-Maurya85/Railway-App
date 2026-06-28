require('dotenv').config();

const express = require('express');
const path = require('path');
const cors = require('cors');

const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const errorHandler = require('./middleware/errorHandler');

// Connect Database
connectDB();

const app = express();

// ─── Middleware ───────────────────────────────────────
app.use(cors());
app.use(express.json());                          // replaces bodyParser.json()
app.use(express.urlencoded({ extended: false })); // replaces bodyParser.urlencoded()
app.use(express.static(path.join(__dirname, 'public')));

// ─── Routes ───────────────────────────────────────────
app.use('/api/auth', authRoutes);

// ─── Serve Frontend ───────────────────────────────────
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// ─── 404 Handler ─────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

// ─── Error Handler (always last) ─────────────────────
app.use(errorHandler);

// ─── Start Server ─────────────────────────────────────
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});