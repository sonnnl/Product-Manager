module.exports.index = (req, res) => {
  res.render("client/pages/products/index", {
    title: "Danh sach san pham",
    message: "Deo co san pham nao dau ku",
  });
};
