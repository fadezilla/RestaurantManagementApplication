const express = require("express");
const cors = require("cors");
const proxy = require("express-http-proxy");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/customer", proxy("http://localhost:8001"));
app.use("/employee", proxy("http://localhost:8002"));
app.use("/management", proxy("http://localhost:8003"));


app.listen(8000, () => {
  console.log("Gateway is running on Port 8000");
});