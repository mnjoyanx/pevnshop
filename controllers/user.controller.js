exports.login = (req, res) => {
  return "login";
};

exports.register = (req, res) => {
  return "register";
};

exports.check = (req, res) => {
  return res.status(200).json(5555);
};
