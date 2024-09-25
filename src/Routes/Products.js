import express from "express";
import parser from "../Config/MulterConfig.js";
import ProductController from "../Controllers/Products.js";
import Auth from "../Common/Auth.js";

const router = express.Router();

router.post("/create",parser.array("images"),Auth.adminGaurd,ProductController.createProduct);
router.put("/:id", ProductController.editProduct);
router.delete("/:id", ProductController.deleteProduct);
router.get("/", ProductController.getProductsByCategory);
router.get("/allproducts", ProductController.getAllProducts);
router.get("/:id", ProductController.getProductsById);

export default router;
