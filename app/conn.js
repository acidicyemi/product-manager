const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('product_manager', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});