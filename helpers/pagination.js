module.exports = (paginationObject, query, countProduct) => {
  if (query.page) {
    paginationObject.currentPage = parseInt(query.page);
  }
  paginationObject.countProduct = countProduct;
  paginationObject.totalPage = Math.ceil(
    countProduct / paginationObject.limit + 1
  );
  return paginationObject;
};
