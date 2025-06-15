const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Example route
app.get('/', (req, res) => {
  res.send('FraudGuard backend is running!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// first message
app.get('/api/test', (req, res) => {
  res.json({ message: 'Hello from backend! to h.p, deefuk and team ingenuity' });
});
