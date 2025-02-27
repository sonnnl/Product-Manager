// GET - /admin/products
module.exports.product = (req, res) => {
  res.render("admin/pages/products/index.pug", {
    pageTitle: "Products",
  });
};
