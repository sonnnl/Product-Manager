module.exports = (query) => {
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
  if (query.status) {
    const productStatus = productFilter.find((item) => {
      return item.status == query.status;
    });
    productStatus.class = "active";
  } else {
    productFilter[0].class = "active";
  }
  return productFilter;
  //end button active
};
