"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Todos", [
      {
        title: "Example Todo 1",
        description: "This is the first example todo",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Example Todo 2",
        description: "This is the second example todo",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Todos", null, {});
  },
};
