//Implements the different types of properties and methods of request and response object with an examples(09 Feb).
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get('/user/:id', (req, res) => {
  console.log('URL:', req.url);
  console.log('HTTP Method:', req.method); 
  console.log('Request Headers:', req.headers); 
  console.log('Route Parameter (id):', req.params.id);
  console.log('Query Parameters:', req.query);
  const user = {
    id: req.params.id,
    name: 'John Doe',
    age: 30
  };
  res.status(200).json(user); 
});

app.post('/user', (req, res) => {
  console.log('Received POST request');
  console.log('Request Body:', req.body); 
  const newUser = {
    id: Math.random().toString(36).substring(7),
    name: req.body.name,
    email: req.body.email
  };

  res.status(201).json(newUser); 
});

app.put('/user/:id', (req, res) => {
  console.log('Received PUT request');
  console.log('Request Body:', req.body);
  const updatedUser = {
    id: req.params.id,
    name: req.body.name,
    email: req.body.email
  };

  res.status(200).json(updatedUser);
});

app.delete('/user/:id', (req, res) => {
  console.log('Received DELETE request');
  console.log('User ID to delete:', req.params.id); 
  res.sendStatus(204);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
