var express = require('express');
var router = express.Router();

let pc = require("../controllers/product")
/* GET users listing. */
router.get('/', pc.listProducts);

module.exports = router;
