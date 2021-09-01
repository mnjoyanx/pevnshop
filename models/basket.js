module.exports = (sequelize, DataTypes) => {
  const Basket = sequelize.define("Basket", {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  return Basket;
};
