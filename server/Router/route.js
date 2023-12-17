const express = require("express");
const { created, read } = require("../Controller/dataController");
const router = express.Router();

router.get("/data", read);
router.post("/data", created);

module.exports = router;
