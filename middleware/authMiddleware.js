const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.authMiddleware = (req, res, next) => {
  console.log(req.headers, 8888);
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: true, message: "Not Authorized" });
  }

  const decodedToken = jwt.verify(token, process.env.SECRET);

  req.user = decodedToken;
  next();
};
