require('dotenv').config(); // Loads environment variables from .env

const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve index.html from the root directory (no 'public' folder)
app.get('/', (req, res) => {
  const indexPath = path.join(__dirname, 'index.html');
  let html = fs.readFileSync(indexPath, 'utf-8');
  
  // Replace placeholders {{API_KEY}} and {{SHEET_ID}} with the actual values from .env
  html = html.replace('{{API_KEY}}', process.env.API_KEY);
  html = html.replace('{{SHEET_ID}}', process.env.SHEET_ID);

  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});