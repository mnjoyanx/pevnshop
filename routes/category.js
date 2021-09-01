const { Router } = require("express");
const router = Router();
const categoryController = require("../controllers/category.controller");

router.post("/", categoryController.create);
router.get("/", categoryController.getAll);
router.get("/:id", categoryController.getOne);

module.exports = router;
