import { connectToDatabase, disconnectFromDatabase } from './db/mongoConnect.js';
import routers from "./routes/routers.js";
import dotenv from 'dotenv';
dotenv.config();
import express from "express";

const app = express();
app.use(express.json());

import cors from 'cors';
app.use(cors());

const PORT = process.env.PORT || 3000;

connectToDatabase();

app.use("/koronaHMO", routers);

app.use(/^\/koronaHMO?$/, function (req, res) {
  res.send("Hello and welcome to the Corona Management System for the Health Insurance Fund");
});

app.get("*", function (req, res) {
  res.send("ERROR");
});


app.listen(PORT, async () => {
  console.log(`server up on port ${PORT}`);
});

process.on('SIGINT', async () => {
  await disconnectFromDatabase();
  process.exit(0);
});
