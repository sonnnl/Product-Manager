require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const clientRoute = require("./routes/client/index.route");
const adminRoute = require("./routes/admin/index.route");
const methodOverride = require("method-override");
const app = express();
const port = process.env.PORT;
const database = require("./config/database");
const systemConfig = require("./config/system");
database.connect();
app.use(methodOverride("_method"));
app.set("view engine", "pug");
app.set("views", "./views");
app.use(express.static("public"));
app.locals.prefixAdmin = systemConfig.prefixAdmin;
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded());
clientRoute(app);
adminRoute(app);
console.log(process.env.MONGODB_URL);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
