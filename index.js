const usersController = require("./Controllers/userscontroller");
const express = require("express");
const app = express();

app.use(express.json());

app.use("/users", usersController);

app.listen(3000, function () {
  console.log("Cool Zone in port 3000!");
});
