import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://marerror:501518@cluster0.hxuigmu.mongodb.net/food-del?appName=Cluster0",
    )
    .then(() => {
      console.log("DB Connected");
    })
    .catch((err) => {
      console.log(err);
    });
};
