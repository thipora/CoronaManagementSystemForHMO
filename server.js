const usersRoutes = require("./routes/usersRoutes");
const vaccinationsRoutes = require("./routes/vaccinationsRoutes")
const coronaPatientsRoutes = require("./routes/coronaPatientsRoutes")
require("./db/mongoConnect");


const express = require("express");

const app = express();

const PORT = 8000;

app.use("/users", usersRoutes)
app.use("/vaccinations", vaccinationsRoutes)
app.use("/coronaPatients", coronaPatientsRoutes)


app.listen(PORT, async () => {
  console.log(`server up on port ${PORT}`);
});
