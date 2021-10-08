const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { router } = require("./Router/router");
dotenv.config({ path: "./config.env" });

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(cors());
app.use("/contentstack", router);

let port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`On Port ${port}`);
});
