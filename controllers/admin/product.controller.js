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
    const index = productFilter.findIndex((item) => {
      return item.status == req.query.status;
    });
    productFilter[index].class = "active";
  } else {
    productFilter[0].class = "active";
  }
  //end button active

  //Xu ly tim kiem
  let finder = { delete: false };
  if (req.query.status) {
    finder.status = req.query.status;
  }
  //ket thuc xu ly tim kiem
  const products = await Product.find(finder);
  console.log(products);
  res.render("admin/pages/products/index.pug", {
    pageTitle: "Products",
    products: products,
    productFilter: productFilter,
  });
};
