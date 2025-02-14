module.exports.index = (req, res) => {
  res.render("client/pages/about/index", {
    title: "About",
    message: "Ve chung toi",
  });
};
