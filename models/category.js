module.exports = (sequelize, Sequelize) => {
  const Category = sequelize.define("category", {
    title: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },

    description: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  });

  return Category;
};
