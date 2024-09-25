import mongoose from "./index.js";

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "Product Name is required"] },
    title: { type: String, required: [true, "Product Title is required"] },
    description: {
      type: String,
      required: [true, "Product Description is required"],
    },
    price: { type: Number, required: [true, "Product Price is required"] },
    brand: { type: String, required: [true, "Product Brand is required"] },
    images: [{ type: String }],
    category: {
      type: String,
      required: [true, "Product Category is required"],
    },
    style: { type: String },
    color: { type: String, required: [true, "Product color is required"] },
    size: { type: String },
    quantity: {
      type: Number,
      required: [true, "Product quantity is required"],
    },
    shipping: { type: Boolean },
  },
  {
    collection: "Products",
    versionKey: false,
    timestamps: true,
  }
);

const ProductModel = mongoose.model("Products", ProductSchema);

export default ProductModel;