const productRoutes = require("./product.route");
const contactRoutes = require("./contact.route");
const aboutRoutes = require("./about.route");
const controller = require("../../controllers/client/home.controller");
module.exports = (app) => {
  app.get("/", controller.index);
  app.use("/products", productRoutes);
  app.use("/contact", contactRoutes);
  app.use("/about", aboutRoutes);
};
