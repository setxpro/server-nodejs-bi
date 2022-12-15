import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import { connectMssql } from "./Connections/mssql";
import { router } from "./Routes/routes";

const app = express();

app.use(express.json());
app.use(cors());
connectMssql();

app.use("/api", router);

app.listen(process.env.PORT, () =>
  console.log("Server listening on port " + process.env.PORT)
);
