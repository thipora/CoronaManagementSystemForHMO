import { connectToDatabase, disconnectFromDatabase } from './db/mongoConnect.js';
import membersRoutes from "./routes/membersRoutes.js";
import vaccinationsRoutes from "./routes/vaccinationsRoutes.js";
import coronaPatientsRoutes from "./routes/coronaPatientsRoutes.js";
// import "./db/mongoConnect.js";

import express from "express";

const app = express();
app.use(express.json());

import cors from 'cors';
app.use(cors());

const PORT = 3000;

connectToDatabase();

app.use("/members", membersRoutes)
app.use("/vaccinations", vaccinationsRoutes)
app.use("/coronaPatients", coronaPatientsRoutes)


app.listen(PORT, async () => {
  console.log(`server up on port ${PORT}`);
});

process.on('SIGINT', async () => {
  await disconnectFromDatabase();
  process.exit(0);
});
