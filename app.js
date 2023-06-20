// app.js

const { Todo } = require("./models");

// Create a new Todo
Todo.create({
  title: "New Todo",
  description: "This is a new todo item",
  createdAt: new Date(),
  updatedAt: new Date(),
})
  .then((todo) => {
    console.log("Todo created:", todo.toJSON());
  })
  .catch((err) => {
    console.error("Error creating todo:", err);
  });

// Read all Todos
Todo.findAll()
  .then((todos) => {
    console.log(
      "Todos:",
      todos.map((todo) => todo.toJSON())
    );
  })
  .catch((err) => {
    console.error("Error retrieving todos:", err);
  });

// Update a Todo
Todo.update(
  {
    title: "Updated Todo",
  },
  {
    where: {
      id: 1,
    },
  }
)
  .then((rowsUpdated) => {
    console.log("Rows updated:", rowsUpdated);
  })
  .catch((err) => {
    console.error("Error updating todo:", err);
  });

// Delete a Todo
Todo.destroy({
  where: {
    id: 2,
  },
})
  .then((rowsDeleted) => {
    console.log("Rows deleted:", rowsDeleted);
  })
  .catch((err) => {
    console.error("Error deleting todo:", err);
  });
