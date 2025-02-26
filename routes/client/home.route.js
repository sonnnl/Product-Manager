const homeRouter = require("../../controllers/client/home.controller");
const express = require("express");
const router = express.Router();
router.get("/", homeRouter.index);
module.exports = router;
