var express = require('express');
var router = express.Router();

let pc = require("../controllers/product")

var customLogger = require("../middleware/logIp")


/* GET users listing. */
router.get('/',customLogger, pc.listProducts);
router.post("/", pc.createProducts)
router.get("/view/:id", pc.viewProduct)
router.put("/update/:id", pc.updateProduct)
router.delete("/:id", pc.deleteProduct)

module.exports = router;
