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
    //neu co query statusstatus
    const productStatus = productFilter.find((item) => {
      // tim object co status ứng với status đang yêu cầu trên API
      return item.status == query.status;
    });
    productStatus.class = "active"; //gán vào nút đang yêu cầu API class active
  } else {
    productFilter[0].class = "active"; // mặc định thì sẽ active nút đầu (tất cả)
  }
  return productFilter;
  //end button active
};
