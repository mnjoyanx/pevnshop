const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { User } = require("../models");

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const candidate = await User.findOne({
    where: { username: req.body.username },
  });

  if (!candidate) {
    return res.status(404).json({ error: true, message: "incorrect data" });
  }

  const decodedPassword = await bcrypt.compare(password, candidate.password);

  if (!decodedPassword) {
    return res.status(404).json({ error: true, message: "incorrect data" });
  }

  const token = jwt.sign(
    { id: candidate.id, username, role: candidate.role },
    process.env.SECRET
  );

  return res.status(200).json({ error: false, token });
};

exports.register = async (req, res) => {
  const { username, password, email, name } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "username or password is not defined" });
  } else {
    const candidate = await User.findOne({ where: { username } });

    if (candidate) {
      return res
        .status(400)
        .json({ error: true, message: "username is already taken" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      password: hashedPassword,
      email,
      name,
    });

    const token = jwt.sign(
      { id: user.id, username, role: user.role },
      process.env.SECRET,
      {
        expiresIn: "1h",
      }
    );
    return res.status(200).json({ error: false, token });
  }
};

exports.check = (req, res, next) => {
  const { id } = req.query;
  if (!id) {
    console.log("id is not defined");
    return res.status(404).json({ message: "id is not defined" });
  }
  return res.status(200).json(id);
};
