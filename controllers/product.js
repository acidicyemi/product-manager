var Product = require("../models").Product
Promise   = require('bluebird'),

module.exports = {
    listProducts: function (req, res, next) {
        Promise.coroutine(function*() {
            try {
              var products = yield Product.findAndCountAll({where:{},limit:10});
              return res.status(200).send({success: true, products});
            } catch (err) {
              return res.status(200).send({success: false, error: (err)});
            }
          })();
    },
}