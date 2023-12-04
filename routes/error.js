const express = require("express");

const router = express.Router();
const errController = require("../controllers/error");

router.get(errController.error404);

module.exports = router;
