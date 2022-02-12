const mongoose = require("mongoose");
const config = require("./default.json");

// const db = config.get("mongoURI");

// console.log(db);

const connectMongoDB = async () => {
  try {
    await mongoose.connect(config.mongoURI);
    console.log('connected to mongoDB...');
  } catch (error) {
    console.log("Error While Connecting DB: ", error);
    process.exit(1); // exit process with code 1
  }
};

module.exports = connectMongoDB;
