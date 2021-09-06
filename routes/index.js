const { Router } = require("express");
const router = Router();
const user = require("./user");
const product = require("./product");
const category = require("./category");
const brand = require("./brand");

router.use("/auth", user);
router.use("/product", product);
router.use("/category", category);
router.use("/brand", brand);
router.use("/user", user);

module.exports = router;
