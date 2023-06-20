const express = require("express");
const app = express();
const { Todo } = require("./models");
const { User } = require("./models");

// Middleware
app.use(express.json());

// Create a new Todo
app.post("/todos", async (req, res) => {
  try {
    const { title, description, userId } = req.body;
    const todo = await Todo.create({
      title,
      description,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 1,
    });
    res.status(201).json({ message: "Todo created successfully", todo });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error creating todo", error: err.message });
  }
});

// Read all Todos
app.get("/todos", (req, res) => {
  Todo.findAll()
    .then((todos) => {
      res.status(200).json(todos);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "Error retrieving todos", error: err.message });
    });
});

// Update a Todo
app.put("/todos/:id", (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  Todo.update({ title, description }, { where: { id } })
    .then((rowsUpdated) => {
      if (rowsUpdated[0] === 0) {
        res.status(404).json({ message: "Todo not found" });
      } else {
        res.status(200).json({ message: "Todo updated successfully" });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "Error updating todo", error: err.message });
    });
});

// Delete a Todo
app.delete("/todos/:id", (req, res) => {
  const { id } = req.params;

  Todo.destroy({ where: { id } })
    .then((rowsDeleted) => {
      if (rowsDeleted === 0) {
        res.status(404).json({ message: "Todo not found" });
      } else {
        res.status(200).json({ message: "Todo deleted successfully" });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "Error deleting todo", error: err.message });
    });
});

// ***************************
// Create a new User
app.post("/users", (req, res) => {
  const { name } = req.body;

  User.create({
    name,
    createdAt: new Date(),
    updatedAt: new Date(),
  })
    .then((user) => {
      res.status(201).json({ message: "User created successfully", user });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "Error creating user", error: err.message });
    });
});

// Read all Users
app.get("/users", (req, res) => {
  User.findAll()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "Error retrieving Users", error: err.message });
    });
});

// Update a User
app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  User.update({ name }, { where: { id } })
    .then((rowsUpdated) => {
      if (rowsUpdated[0] === 0) {
        res.status(404).json({ message: "User not found" });
      } else {
        res.status(200).json({ message: "User updated successfully" });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "Error updating User", error: err.message });
    });
});

// Delete a User
app.delete("/users/:id", (req, res) => {
  const { id } = req.params;

  User.destroy({ where: { id } })
    .then((rowsDeleted) => {
      if (rowsDeleted === 0) {
        res.status(404).json({ message: "User not found" });
      } else {
        res.status(200).json({ message: "User deleted successfully" });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "Error deleting User", error: err.message });
    });
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
