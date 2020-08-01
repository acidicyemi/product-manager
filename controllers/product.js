var models = require("../models")
const Product = models.Product
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

    createProducts: function (req, res, next) {
      Promise.coroutine(function*() {
          try {
            var product = yield Product.create(req.body);
            return res.status(200).send({success: true, product});
          } catch (err) {
            return res.status(200).send({success: false, error: (err)});
          }
        })();
      },

      viewProduct: function (req, res, next) {
        Promise.coroutine(function*() {
          try {
            var product = yield Product.findOne({where: {id: req.params.id}});
            return res.status(200).send({success: true, product});
          } catch (err) {
            return res.status(200).send({success: false, error: (err)});
          }
      })();
    },

    updateProduct: function (req, res) {
      Promise.coroutine(function*() {
        try {
          var updatedProduct = yield Product.update(req.body, {where: {id: req.params.id}});
          console.log(("test",updatedProduct[0]));
          return res.status(200).send({success: true, product });
        } catch (err) {
          return res.status(200).send({success: false, error: (err)});
        }
      })();
    }, 

    deleteProduct: function (req, res) {
      Promise.coroutine(function*() {
        try {
          var deletedProduct = yield Product.destroy({where: {id: req.params.id}});
          if(!deletedProduct) {
            return res.status(200).send({success: false, message: 'Invalid Product id'});
          }
          return res.status(200).send({success: true, message: 'success'});
        } catch (err) {
          return res.status(200).send({success: false, error: (err)});
        }
      })();
    }
}