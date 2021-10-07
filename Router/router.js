const express = require("express");
const router = express.Router();
const { getEntryData } = require("../services/getEntries");

router.route("/getdata").get(getEntryData);

module.exports.router = router;
