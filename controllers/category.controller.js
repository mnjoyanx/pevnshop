const { ValidationError } = require("sequelize");
const { Category, Product } = require("../models");

exports.getAll = async (req, res) => {
  const all = await Category.findAll({
    include: { model: Product },
  });

  return res.status(200).json({ error: false, data: all });
};

exports.getOne = (req, res) => {
  const id = req.params;
  const category = Category.findOne({ where: { id } });
};

exports.create = async (req, res) => {
  try {
    const { title, description } = req.body;
    const category = await Category.create({ title, description });
    return res.status(201).json({ error: false, data: category });
  } catch (error) {
    if (error instanceof ValidationError) {
      console.log(error.errors[0].message);
      return res
        .status(400)
        .json({ error: true, message: error.errors[0].message });
    }
    return res.status(500).send(error);
  }
};
