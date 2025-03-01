const mongoose = require("mongoose");
module.exports.connect = async () => {
  try {
    mongoose.connect(process.env.MONGODB);
  } catch (error) {
    console.log(error);
  }
};
