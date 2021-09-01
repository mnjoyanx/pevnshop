module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define("Product", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    price: {
      type: DataTypes.INTEGER,
    },

    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    rating: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    count: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },

    brand_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  return Product;
};
