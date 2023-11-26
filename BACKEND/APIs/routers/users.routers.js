const { Router } = require("express");
const {
   registieredUser,
   authUser,
   _user,
} = require("../controllers/userController");
const { protect } = require("../middleware/authUser");
const userRouter = Router();

userRouter.route("/").post(registieredUser).get(protect, _user);
userRouter.post("/login", authUser);

module.exports = userRouter;
