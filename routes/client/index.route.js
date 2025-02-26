const productRoutes = require("./product.route");
const contactRoutes = require("./contact.route");
const aboutRoutes = require("./about.route");
const homeRoutes = require("./home.route");
module.exports = (app) => {
  app.use("/", homeRoutes);
  app.use("/products", productRoutes);
  app.use("/contact", contactRoutes);
  app.use("/about", aboutRoutes);
};
