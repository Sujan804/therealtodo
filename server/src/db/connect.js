const mongoose = require("mongoose");
const connectionString = process.env.MONGO_URL;

const connectDatabase = async () => {
  try {
    await mongoose
      .connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Connected to MongoDB database successfully!");
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.log("Database connection error:", error.message);
  }
};

module.exports = connectDatabase;
