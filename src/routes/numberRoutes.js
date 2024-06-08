const express = require("express");
const router = express.Router();
const numberController = require("../controllers/numberController");

router.get("/numbers/:numberId", numberController.getNumbers);

module.exports = router;
