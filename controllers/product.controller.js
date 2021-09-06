const { Product, Brand } = require("../models");
const { ValidationError, Op } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

exports.getAll = async (req, res) => {
  let { limit, page, brand_id, name } = req.query;
  limit = limit ? parseInt(limit) : 10;
  page = page ? parseInt(page) : 1;
  const offset = limit * page - limit;

  try {
    if (!brand_id && !name) {
      console.log("all else ");
      const all = await Product.findAll({
        limit,
        offset,
        include: { all: true },
      });
      return res.status(200).json({ error: false, data: all });
    }
    if (brand_id && !name) {
      const all = await Product.findAll({ where: { brand_id }, limit, offset });
      return res.status(200).json({ error: false, data: all });
    }

    if (!brand_id && name) {
      const all = await Product.findAll({
        where: { name: { [Op.like]: `%${name}%` } },
        limit,
        offset,
      });
      return res.status(200).json({ error: false, data: all });
    } else {
      const all = await Product.findAll({ limit, offset });
      return res.status(200).json({ error: false, data: all });
    }
  } catch (err) {
    if (err instanceof ValidationError) {
      return res
        .status(400)
        .json({ error: true, message: err.errors[0].message });
    }

    return res.status(500).json({ error: true, message: err.message });
  }
};

exports.getOne = (req, res) => {
  return res.send("get one");
};

exports.create = async (req, res) => {
  try {
    const { name, price, rating, count, brand_id } = req.body;
    const { image } = req.files;
    let fileName = uuidv4() + ".jpg";
    image
      .mv(path.resolve(__dirname, "../static", fileName))
      .then(() => {
        return res.json("uploaded");
      })
      .catch((err) => {
        return res.json({ error: true, message: err.message });
      });

    const product = await Product.create({
      name,
      price,
      image: fileName,
      rating,
      count,
      brand_id,
    });

    return res.status(201).json({ error: false, data: product });
  } catch (err) {
    if (err instanceof ValidationError) {
      return res
        .status(400)
        .json({ error: true, message: err.errors[0].message });
    }

    return res.status(500).json({ error: true, message: err.message });
  }
};
