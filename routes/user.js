const { Router } = require("express");
const router = Router();
const userController = require("../controllers/user.controller");

router.post("/login", userController.login);
router.post("/register", userController.register);
router.get("/check", userController.check);

module.exports = router;
