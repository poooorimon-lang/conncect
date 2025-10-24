// Import Express
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Predefined value to check against
const predefinedValue = "1281280";

// Define the API endpoint
app.post('/check', (req, res) => {
  const userInput = req.body.input;

  if (!userInput) {
    return res.status(400).json({ success: false, message: "Missing input" });
  }

  // Compare the input with the predefined value
  if (userInput === predefinedValue) {
    res.json({ success: true, message: "Input matches!" });
  } else {
    res.json({ success: false, message: "Input does not match." });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});