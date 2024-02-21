const express = require('express');
const bodyParser = require('body-parser');
const { authenticateUser, createToken, verifyToken } = require('./auth');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = authenticateUser(username, password);
  if (user) {
    const token = createToken(user);
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid username or password' });
  }
});


app.get('/protected', (req, res) => {
  
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  
  const decoded = verifyToken(token);
  if (!decoded) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  res.json({ message: 'This is protected data!', user: decoded });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
