const { Sequelize } = require("sequelize");
const sequelize = require("../config");

sequelize
  .authenticate()
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });

const Posts = require("./post")(sequelize, Sequelize);
const User = require("./user")(sequelize, Sequelize);
const Basket = require("./basket")(sequelize, Sequelize);
const Product = require("./product")(sequelize, Sequelize);
const Category = require("./category")(sequelize, Sequelize);
const Brand = require("./brand")(sequelize, Sequelize);

sequelize.sync({ alter: true });

module.exports = {
  Posts,
  User,
  Basket,
  Product,
  Category,
  Brand,
};
