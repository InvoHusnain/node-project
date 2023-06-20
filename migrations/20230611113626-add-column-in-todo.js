module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Todos", "userId", {
      type: Sequelize.INTEGER,
      allowNull: false, // Provide a default value here
      references: {
        model: "Users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Todos", "userId");
  },
};
