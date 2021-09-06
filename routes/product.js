const { Router } = require("express");
const router = Router();
const { authMiddleware } = require("../middleware/authMiddleware");
const productController = require("../controllers/product.controller");

router.get("/", authMiddleware, productController.getAll);
router.get("/:id", productController.getOne);
router.post("/", productController.create);

module.exports = router;
