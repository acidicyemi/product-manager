var express = require('express');
var router = express.Router();

let uc = require("../controllers/user")
/* GET users listing. */
router.get('/', uc.listUsers);
router.post("/", uc.createUser)
// router.get("/view/:id", uc.viewProduct)
// router.put("/update/:id", uc.updateProduct)
// router.delete("/:id", uc.deleteProduct)

module.exports = router;
