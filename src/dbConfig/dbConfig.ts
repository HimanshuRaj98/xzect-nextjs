import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URL!);
    const connection = mongoose.connection;

    connection.on("Connected", () => {
      console.log("MongoDB Connected Successfully");
    });

    connection.on("error", () => {
      console.log("Error in MongoDB Connection");
      process.exit();
    });
  } catch (error) {
    console.log("Something Went Wrong");
    console.log(error);
  }
}
