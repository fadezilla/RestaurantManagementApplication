const express = require("express");
const cors = require("cors");
const proxy = require("express-http-proxy");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/customer", proxy("http://localhost:3000"));
app.use("/employee", proxy("http://localhost:3001"));


app.listen(8000, () => {
  console.log("Gateway is running on Port 8000");
});