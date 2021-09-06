module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    name: {
      type: DataTypes.STRING,
    },

    username: {
      type: DataTypes.STRING,
      unique: true,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "user",
    },
  });

  return User;
};
