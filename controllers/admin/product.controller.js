// GET - /admin/products
const statusFilter = require("../../helpers/filter");
const search = require("../../helpers/search");
const Product = require("../../models/product.model");
const paginationHelpers = require("../../helpers/pagination");
module.exports.product = async (req, res) => {
  //filter
  const productFilter = statusFilter(req.query);
  //end filter function
  let finder = { delete: false };
  // xu ly status
  if (req.query.status) {
    finder.status = req.query.status;
  }
  // end xu ly status
  //Xu ly tim kiem
  search(req.query, finder);
  //ket thuc xu ly tim kiem

  //pagination
  const countProduct = await Product.collection.count();
  const pagination = paginationHelpers(
    (paginationObject = {
      currentPage: 1,
      limit: 4,
    }),
    req.query,
    countProduct
  );
  //end pagination
  const products = await Product.find(finder)
    .limit(paginationObject.limit)
    .skip((paginationObject.currentPage - 1) * paginationObject.limit);
  res.render("admin/pages/products/index.pug", {
    pageTitle: "Products",
    products: products,
    productFilter: productFilter,
    title: req.query.keyword,
    pagination: pagination,
  });
};
module.exports.changeStatus = async (req, res) => {
  let status = req.params.status;
  let id = req.params.id;
  await Product.updateOne({ _id: id }, { status: status });
  res.redirect("back");
};
