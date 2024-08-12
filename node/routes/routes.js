const express = require("express");
const router = express.Router();
const {getProducts,items} = require("../controllers/controller")

router.route("/").get(getProducts);
router.route("/new").get(items);

module.exports = router;