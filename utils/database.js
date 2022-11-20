const Sequelize = require("sequelize");
const sequelize = new Sequelize("onlinestore", "root", "Chandr@007", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
