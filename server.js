
require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");

// Connect Database
connectDB();

const app = express();

// =======================
// Middleware
// =======================
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));

// =======================
// Routes
// =======================
app.use("/auth", authRoutes);

// Home Page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

// =======================
// Start Server
// =======================
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});