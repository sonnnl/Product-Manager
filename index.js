require("dotenv").config();
const express = require("express");
const route = require("./routes/client/index.route");
const app = express();
const port = process.env.PORT;
const database = require("./config/database");
database.connect();
app.set("view engine", "pug");
app.set("views", "./views");
app.use(express.static("public"));
route(app);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
