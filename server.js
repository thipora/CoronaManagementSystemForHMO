const usersRoutes = require("./routes/usersRoutes.js");
const vaccinationRoutes = require("./routes/vaccinationsRoutes.js")

// const db = require("./db/mongoConnect");
require("./db/mongoConnect");



const express = require("express");

const app = express();

const PORT = 8000;

app.use("/users", usersRoutes)
app.use("/vaccin", vaccinationRoutes)


app.listen(PORT, async () => {
  console.log(`server up on port ${PORT}`);
});
