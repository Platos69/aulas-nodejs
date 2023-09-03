const Sequelize = require("sequelize")
const sequelize = new Sequelize("postagens", "root", "29052007", {
    host: "localhost",
    dialect: "mysql",
  })

var db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;