const mongoose = require("mongoose");
module.exports.connect = async () => {
  try {
    mongoose.connect(process.env.MONGODB);
    console.log("Connect successfully");
  } catch (error) {
    console.log(error);
  }
};
