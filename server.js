const usersRoutes = require("./routes/usersRoutes.js");


const db = require("./db/mongoConnect");



const express = require("express");

const app = express();

const PORT = 8000;

app.use("/users", usersRoutes)

app.listen(PORT, async () => {
  console.log(`server up on port ${PORT}`);
});
