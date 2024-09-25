import multer from "multer";
import {CloudinaryStorage} from "multer-storage-cloudinary";
import cloudinary from "./CloudinaryConfig.js";

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "Ecommerce",
    allowedFormats: ["jpg", "png"],
  },
});

const parser = multer({ storage: storage });

export default parser