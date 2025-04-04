module.exports = (paginationObject, query, countProduct) => {
  if (query.page) {
    paginationObject.currentPage = parseInt(query.page); //cap nhat att current page thanh page can den
  }
  paginationObject.countProduct = countProduct; // tong tat ca products
  paginationObject.totalPage = Math.ceil(
    // tong tat ca pages
    countProduct / paginationObject.limit + 1
  );
  return paginationObject; // tra ve object gom 4 attr current page, countProdcut, totalPage, limit de dan len giao dien
};
