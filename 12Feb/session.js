//Save the multiples cookies using the concept of cookies in Node and Express(12feb).
const express = require('express');
const session = require('express-session');
const app = express();

app.use(express.json());

app.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

app.set('view engine', 'ejs');

app.get('/api/data', (req, res) => {
  const data = { message: 'Hello, world!' };
  res.json(data);
});

app.get('/hello', (req, res) => {
  res.send('Hello, world!');
});

app.get('/users', (req, res) => {
});

app.post('/users', (req, res) => {
});

app.put('/users/:id', (req, res) => {
});

app.delete('/users/:id', (req, res) => {
});

app.get('/setSession', (req, res) => {
  req.session.user = { username: 'exampleuser' };
  res.send('Session set');
});

app.get('/getSession', (req, res) => {
  const user = req.session.user;
  res.send(user ? `Logged in as ${user.username}` : 'Not logged in');
});

app.get('/', (req, res) => {
  const data = { message: 'Hello, world!' };
  res.render('index', { data });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
