const { ValidationError } = require("sequelize");
const { Brand } = require("../models");

exports.getAll = (req, res) => {
  return "all";
};

exports.create = async (req, res) => {
  try {
    const { name, image } = req.body;

    const brand = await Brand.create({ name, image });

    return res.status(201).json({ error: false, message: brand });
  } catch (err) {
    if (err instanceof ValidationError) {
      return res
        .status(400)
        .json({ error: true, message: err.errors[0].message });
    }
    return res.status(500).json({ error: true, message: err.message });
  }
};
