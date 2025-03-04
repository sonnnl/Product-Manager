// GET - /admin/products
const Product = require("../../models/product.model");
module.exports.product = async (req, res) => {
  let productFilter = [
    {
      name: "Tất cả",
      status: "",
      class: "",
    },
    {
      name: "Hoạt động",
      status: "active",
      class: "",
    },
    {
      name: "Ngừng hoạt động",
      status: "inactive",
      class: "",
    },
  ];
  //xu ly button active//
  if (req.query.status) {
    const productStatus = productFilter.find((item) => {
      return item.status == req.query.status;
    });
    productStatus.class = "active";
  } else {
    productFilter[0].class = "active";
  }
  //end button active

  //Xu ly tim kiem
  let finder = { delete: false };
  if (req.query.status) {
    finder.status = req.query.status;
  }
  if (req.query.keyword) {
    finder.title = new RegExp(req.query.keyword, "i");
  }
  //ket thuc xu ly tim kiem
  const products = await Product.find(finder);
  res.render("admin/pages/products/index.pug", {
    pageTitle: "Products",
    products: products,
    productFilter: productFilter,
    title: req.query.keyword,
  });
};
