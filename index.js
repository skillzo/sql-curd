const express = require("express");
const app = express();
const cors = require("cors");
const todoRoute = require("./routes/todo-route");

app.use(express.json());
app.use(cors());

app.use("/", todoRoute);

app.listen(8080, (req, res) => {
  console.log("listening on om port 8080");
});
