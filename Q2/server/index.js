const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];

app.get('/users', (req, res) => {
  res.json(users);
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
