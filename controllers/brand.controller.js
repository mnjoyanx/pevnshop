const { ValidationError } = require("sequelize");
const { Brand } = require("../models");

exports.getAll = async (req, res) => {
  const all = await Brand.findAll();
  return res.status(200).json({ error: false, data: all });
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
