const { Router } = require("express");
const userControllers = require("../controller/usercontroller");

const userRouter = Router();

userRouter.get("/", userControllers.getAllUsers);
userRouter.post("/add", userControllers.addUser);
userRouter.get("/:id", userControllers.getUserById);

module.exports = { userRouter };