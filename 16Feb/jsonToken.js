const jwt = require('jsonwebtoken');


const secretKey = 'your_secret_key';


const users = [
  { id: 1, username: 'user1', password: 'password1' },
  { id: 2, username: 'user2', password: 'password2' },
];

const authenticateUser = (username, password) => {
  const user = users.find(user => user.username === username && user.password === password);
  return user;
};

const createToken = (user) => {
  return jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '1h' });
};

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded;
  } catch (error) {
    return null; 
  }
};

module.exports = { authenticateUser, createToken, verifyToken };
