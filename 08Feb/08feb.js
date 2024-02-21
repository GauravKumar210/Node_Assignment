//create CRUD operation using Node and Express with fields like firstname, lastname, email, password, age(08 Feb).
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let users = [];
// Routes
app.post("/users", (req, res) => {
  const user = req.body;
  users.push(user);
  res.status(201).json(user);
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.put("/users/:id", (req, res) => {
  const id = req.params.id;
  const updatedUser = req.body;
  users = users.map((user) => {
    if (user.id === id) {
      return { ...user, ...updatedUser };
    }
    return user;
  });
  res.json(users.find((user) => user.id === id));
});

app.delete("/users/:id", (req, res) => {
  const id = req.params.id;
  users = users.filter((user) => user.id !== id);
  res.sendStatus(204);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});