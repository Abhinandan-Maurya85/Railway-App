const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const bcrypt = require('bcrypt');
const User = require('./models/User'); // assumes you have this model created


const app = express();
const PORT = 8080;

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/railwayInternship', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB Connected'))
.catch((err) => console.error('❌ MongoDB Connection Error:', err));

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Serve Frontend
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// -----------------------------
// 📥 Signup Route
// -----------------------------
app.post('/signup', async (req, res) => {
  try {
    const lastUser = await User.findOne().sort({ uniqueId: -1 });
    let idCounter = lastUser ? parseInt(lastUser.uniqueId.split('-')[1]) + 1 : 1;
    const uniqueId = `RSI2025-${String(idCounter).padStart(3, '0')}`;

    // Hash password before storing
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = new User({
      ...req.body,
      password: hashedPassword,
      uniqueId,
    });

    await user.save();
    res.json({ success: true, uniqueId });
  } catch (err) {
    console.error('Signup Error:', err);
    res.status(500).json({ success: false, message: 'Signup failed' });
  }
});

// -----------------------------
// 🔐 Login Route
// -----------------------------
app.post('/login', async (req, res) => {
  const { uniqueId, password } = req.body;
  try {
    const user = await User.findOne({ uniqueId });
    if (!user) {
      return res.status(401).json({ success: false, message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      res.json({ success: true, user });
    } else {
      res.status(401).json({ success: false, message: 'Invalid password' });
    }
  } catch (err) {
    console.error('Login Error:', err);
    res.status(500).json({ success: false, message: 'Login failed' });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
