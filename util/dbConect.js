const mongoose = require( "mongoose");

 const dbConnect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/oci");
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }

  mongoose.connection.on("disconnected", (err) => {
    console.log(err);
  });
};



module.exports = dbConnect;
