require("dotenv").config();
import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import bookRoutes from "./Routes/bookRoutes";
const app = express();

/* Middlewares */
app.use(
  helmet({
    contentSecurityPolicy: true,
    noCache: true,
    referrerPolicy: true
  })
);
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* Routes */
app.use("/books", bookRoutes);

module.exports = app;
