// Simple local chat API for development
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/chat', (req, res) => {
  const { question } = req.body;
  // Demo: respond with a finance/banking persona
  res.json({
    answer: `<think>\n\n</think>\n\nWelcome to FinBank!\n\nMy purpose is to assist you with your banking needs—whether it's checking your account balance, recent transactions, or answering questions about our financial services. How can I help you manage your finances today?`
  });
});

app.listen(PORT, () => {
  console.log(`Local chat API running on http://localhost:${PORT}`);
});
