import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import AppRoutes from "./src/Routes/index.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());
app.use("/", AppRoutes);

app.listen(PORT, () => console.log(`App is listening to port ${PORT} `));