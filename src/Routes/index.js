import express from "express";
import UserRoutes from "./Users.js"
import ProductRoutes from "./Products.js";

const router = express.Router();

router.use("/user",UserRoutes)
router.use("/product",ProductRoutes)

export default router
