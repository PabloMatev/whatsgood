const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
  },
  id: {
    type: String,
    unique: true,
  },
  position: {
    type: String,
  },
  post: {
    type: String,
  },
  salary: {
    type: String,
  },
  startingday: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
