const usersRoutes = require("./routes/usersRoutes");
const vaccinationRoutes = require("./routes/vaccinationsRoutes")
const coronaPatientRoutes = require("./routes/coronaPatientsRoutes")
// const db = require("./db/mongoConnect");
require("./db/mongoConnect");


const express = require("express");

const app = express();

const PORT = 8000;

app.use("/users", usersRoutes)
// app.use("/vaccinations", vaccinationRoutes)
// app.use("/coronaPatients", coronaPatientsRoutes)


app.listen(PORT, async () => {
  console.log(`server up on port ${PORT}`);
});
