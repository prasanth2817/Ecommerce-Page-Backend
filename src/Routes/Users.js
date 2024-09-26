import express from "express";
import UserController from "../Controllers/Users.js";

const router = express.Router();

router.use("/register", UserController.createUsers);
router.use("/login", UserController.Login);
router.use("/forget-password", UserController.forgetPassword);
router.use("/reset-passsword", UserController.resetPassword);

export default router;