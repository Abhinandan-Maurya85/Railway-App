const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// ─── Signup ───────────────────────────────────────────
const signup = async (req, res) => {
  try {
    const { name, email, phone, college, branch, project, period, timeSlot, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "User already exists" });
    }

    // Auto-generate unique Railway ID (RSI2025-001)
    const lastUser = await User.findOne().sort({ uniqueId: -1 });
    let idCounter = lastUser ? parseInt(lastUser.uniqueId.split('-')[1]) + 1 : 1;
    const uniqueId = `RSI2025-${String(idCounter).padStart(3, '0')}`;

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user
    const user = new User({
      name,
      email,
      phone,
      college,
      branch,
      project,
      period,
      timeSlot,
      password: hashedPassword,
      uniqueId,
    });

    await user.save();

    res.status(201).json({ success: true, message: "Signup successful", uniqueId });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ─── Login ────────────────────────────────────────────
const login = async (req, res) => {
  try {
    const { uniqueId, password } = req.body; // login with uniqueId not email

    const user = await User.findOne({ uniqueId });
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }

    // Generate token
    const token = jwt.sign(
      { id: user._id, uniqueId: user.uniqueId },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    // Send user WITHOUT password
    const { password: _, ...safeUser } = user.toObject();

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: safeUser,
    });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { signup, login };