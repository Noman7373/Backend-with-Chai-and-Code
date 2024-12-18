import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    requried: true,
  },
});

const userModel = mongoose.model("User", userSchema);

export default userModel;
