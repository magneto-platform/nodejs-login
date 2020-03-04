const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const {
  createUser,
  login,
  getUserByUserId,
  getUsers
} = require("./user.controller");
router.get("/", checkToken, getUsers);
router.post("/", checkToken, createUser);
router.get("/:id", checkToken, getUserByUserId);
router.post("/login", login);

module.exports = router;
