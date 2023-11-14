import mongoose from "mongoose";

const userShema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  createAt: {
    type: Date,
    default: new Date(),
  },
});

const UserModels = mongoose.model("userModels", userShema);

export default UserModels;
