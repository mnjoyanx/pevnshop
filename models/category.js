module.exports = (sequelize, Sequelize) => {
  const Category = sequelize.define("category", {
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    description: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  });

  return Category;
};
