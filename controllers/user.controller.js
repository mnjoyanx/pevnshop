exports.login = (req, res) => {
  return "login";
};

exports.register = (req, res) => {
  return "register";
};

exports.check = (req, res, next) => {
  const { id } = req.query;
  if (!id) {
    console.log("id is not defined");
    return res.status(404).json({ message: "id is not defined" });
  }
  return res.status(200).json(id);
};
