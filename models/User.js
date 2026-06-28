const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    uniqueId: {
      type: String,
      unique: true,   // no duplicate IDs
      index: true,    // faster login lookup
    },
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email format'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [6, 'Password must be at least 6 characters'],
    },
    phone: {
      type: String,
      required: [true, 'Phone is required'],
      match: [/^[0-9]{10}$/, 'Phone must be 10 digits'],
    },
    college: {
      type: String,
      required: [true, 'College is required'],
      trim: true,
    },
    branch: {
      type: String,
      required: [true, 'Branch is required'],
      trim: true,
    },
    course: {
      type: String,
      trim: true,
    },
    year: {
      type: String,
      trim: true,
    },
    project: {
      type: String,
      trim: true,
    },
    period: {
      type: String,  // e.g. "Jan 2025 - Mar 2025"
      trim: true,
    },
    timeSlot: {
      type: String,  // e.g. "9AM - 5PM"
      trim: true,
    },
    photo: {
      type: String,  // base64 or file path
      default: null,
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt automatically
  }
);

module.exports = mongoose.model('User', userSchema);