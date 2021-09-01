const { Router } = require("express");
const router = Router();
const brandController = require("../controllers/brand.controller");

router.get("/", brandController.getAll);
router.post("/", brandController.create);

module.exports = router;
