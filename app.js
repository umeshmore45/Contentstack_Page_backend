const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const { router } = require("./Router/router");
dotenv.config({ path: "./config.env" });

const app = express();

app.use(cors());
app.use("/contentstack", router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(process.env.PORT, () => {
  console.log(`On Port http://localhost:${process.env.PORT}/`);
});
