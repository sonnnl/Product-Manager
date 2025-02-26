const dashboardRoute = require("./dashboard.route");
const systemConfig = require("../../config/system");
module.exports = (app) => {
  const path = systemConfig.prefixAdmin;
  app.use(path + "/dashboard", dashboardRoute);
};
