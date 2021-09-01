module.exports = (sequelize, Sequelize) => {
  const Brand = sequelize.define("brand", {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    image: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  });

  return Brand;
};
