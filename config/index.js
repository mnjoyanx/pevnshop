const { Sequelize } = require("sequelize");
require("dotenv").config();

const { DB_NAME, DB_USER, DB_PASS, DB_HOST } = process.env;
module.exports = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: "postgres",
});
