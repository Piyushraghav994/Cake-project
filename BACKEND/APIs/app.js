require("dotenv").config();
const express = require("express");
const userRouter = require("./routers/users.routers");
const connectDatabase = require("./configs/database");

connectDatabase();
const app = express();

app.use(express.json());
app.use("/api/user", userRouter);

module.exports = app;