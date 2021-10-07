const express = require("express");
const router = express.Router();
const { getEntryData } = require("../services/getEntries");

router.route("/homepage").get(getEntryData);

module.exports.router = router;
