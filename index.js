import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { productsRouter } from './Routers/product.js';
import { dbConnection } from "./db.js";
import bodyParser from "body-parser";



//confgure the enviroment
dotenv.config();
const PORT = process.env.PORT
//initiating server

const app = express();

//middleware
app.use(express.json());
app.use(cors());
dbConnection()
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
app.use(bodyParser.json());
app.use("/products", productsRouter)
//app.use("/products", productsRouter)
//app.use("/transaction",productsRouter)

//starting ther server
app.listen(9020, ()=>console.log("server running in localhost:9020")) 