module.exports = (query, finder) => {
  if (query.keyword) {
    finder.title = new RegExp(query.keyword, "i");
  }
};
