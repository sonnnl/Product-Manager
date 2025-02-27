const dashboardRoute = require("./dashboard.route");
const systemConfig = require("../../config/system");
const productRoute = require("./product.route");
module.exports = (app) => {
  const path = systemConfig.prefixAdmin;
  app.use(path + "/dashboard", dashboardRoute);
  app.use(path + "/products", productRoute);
};
