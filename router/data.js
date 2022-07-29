const express = require("express");
const dataController = require("../controller/data");

const detailsController = express.Router();
detailsController.route("/details")
.get(dataController.dataApi)

module.exports = detailsController;