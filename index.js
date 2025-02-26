require("dotenv").config();
const express = require("express");
const clientRoute = require("./routes/client/index.route");
const adminRoute = require("./routes/admin/index.route");
const app = express();
const port = process.env.PORT;
const database = require("./config/database");
const systemConfig = require("./config/system");
database.connect();
app.set("view engine", "pug");
app.set("views", "./views");
app.use(express.static("public"));
app.locals.prefixAdmin = systemConfig.prefixAdmin;
clientRoute(app);
adminRoute(app);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
