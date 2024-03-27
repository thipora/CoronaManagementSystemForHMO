const membersRoutes = require("./routes/membersRoutes");
const vaccinationsRoutes = require("./routes/vaccinationsRoutes")
const coronaPatientsRoutes = require("./routes/coronaPatientsRoutes")
require("./db/mongoConnect");


const express = require("express");

const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());

const PORT = 3000;

app.use("/members", membersRoutes)
app.use("/vaccinations", vaccinationsRoutes)
app.use("/coronaPatients", coronaPatientsRoutes)


app.listen(PORT, async () => {
  console.log(`server up on port ${PORT}`);
});
