const mongoose = require("mongoose");
module.exports.connect = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URL);
  } catch (error) {
    console.log(error);
  }
};
