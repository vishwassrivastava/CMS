import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import contactRoutes from "./routes/contacts.js";
import cors from "cors";

const app = express();
dotenv.config();



const connect = () => {
// I am hard coding the mongodb connection uri for easy replication of the project in production I'll use dotenv.
  mongoose
    .connect("mongodb+srv://vishwassrivastava1991:Rashmi2014@cluster0.zondhnc.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
      console.log("connected to db");
    })
    .catch((err) => {
      throw err;
    });
};
app.use(cors());
app.use(express.json());

app.use("/api", contactRoutes);

app.listen(8000, (req, res) => {
  connect();
  console.log("server is running on port 8000");
});
