import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from './routes/categoryRoutes.js'
import ProductRoutes from './routes/productRoute.js'
import path from 'path'
import { fileURLToPath }  from 'url'

import cors from "cors";

// Configure env file
dotenv.config();

// Connecting database
connectDB();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname,'./client/build')))

const PORT = process.env.PORT || 8080;

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", ProductRoutes);

app.use('*',function(req,res){
  res.sendFile(path.join(__dirname,'./client/build/index.html'))
})

app.listen(PORT, () => {
  console.log(`Server is connectd to ${PORT} `.bgCyan.white);
});
