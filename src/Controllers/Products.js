import ProductModel from "../Models/Products.js";

const createProduct = async (req, res) => {
  try {
    // Check if file exists in the request
    if (!req.files || !req.files.length) {
      return res.status(400).send({ message: "No file uploaded" });
    }

    // Destructure fields from the request body
    const {
      name,
      title,
      description,
      brand,
      price,
      category,
      color,
      quantity,
      shipping,
    } = req.body;

    // Check if all required fields are present
    if (
      !name ||
      !title ||
      !description ||
      !brand ||
      !price ||
      !category ||
      !color ||
      !quantity ||
      !shipping === undefined
    ) {
      return res.status(400).send({ message: "Required fields are missing" });
    }

    // Extract file information
    const imagePaths = req.files.map((file) => file.filename);

    // Create a new product instance
    const newProduct = new ProductModel({
      name,
      title,
      description,
      brand,
      price,
      images: imagePaths,
      category,
      color,
      quantity,
      shipping,
    });

    // Save the new product to the database
    await newProduct.save();

    // Send success response
    res.status(201).send({
      message: "Product Created Successfully",
      product: newProduct,
    });
  } catch (error) {
    console.error("Error:", error);
    // Send error response
    res.status(500).send({
      error: error.message,
      message: "Error in creating product",
    });
  }
};

const editProduct = async (req, res) => {
  try {
    let product = await ProductModel.findById({ _id: req.params.id });
    if (product) {
      product.name = req.body.name;
      product.title = req.body.title;
      product.description = req.body.description;
      product.price = req.body.price;
      product.category = req.body.category;
      product.brand = req.body.brand;
      await product.save();
      res.status(200).send({ message: "Product Edited Sucessfully" });
    } else res.status(400).send({ message: "Product Not Found" });
  } catch (error) {
    console.error("Error: ", error);
    res.status(500).send({
      error: error.message,
      message: "Error in creating product",
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    let product = await ProductModel.findById({ _id: req.params.id });
    if (product) {
      await product.deleteOne();
      res.status(200).send({ message: "Product Deleted Successfully" });
    } else {
      res.status(404).send({ message: "Product Not Found" });
    }
  } catch (error) {
    console.error("Error: ", error);
    res.status(500).send({
      error: error.message,
      message: "Error in deleting product",
    });
  }
};

const getProductsByCategory = async (req, res) => {
  try {
    const { category, name } = req.query;
    const products = await ProductModel.find({ category, name });
    if (products.length > 0)
      res
        .status(200)
        .send({ message: "Products Fetched successfully", product: products });
    else res.status(400).send({ message: "No products found" });
  } catch (error) {
    console.error("Error: ", error);
    res.status(500).send({
      error: error.message,
      message: "Error in getting product",
    });
  }
};

const getProductsById = async (req, res) => {
  try {
    const product = await ProductModel.findOne({ _id: req.params.id });
    if (product)
      res
        .status(200)
        .send({ message: "Products Fetched successfully", products: product });
    else res.status(400).send({ message: "No products found" });
  } catch (error) {
    console.error("Error: ", error);
    res.status(500).send({
      error: error.message,
      message: "Error in getting product",
    });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const Allproducts = await ProductModel.find({});
    if (Allproducts.length > 0)
      res
        .status(200)
        .send({
          message: "Products Fetched successfully",
          product: Allproducts,
        });
    else res.status(400).send({ message: "No products found" });
  } catch (error) {
    console.error("Error: ", error);
    res.status(500).send({
      error: error.message,
      message: "Error in getting product",
    });
  }
};
export default {
  createProduct,
  editProduct,
  deleteProduct,
  getProductsByCategory,
  getProductsById,
  getAllProducts,
};