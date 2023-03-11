const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const {Schema} = mongoose; // same as previous line using obj destructuring

const userSchema = new Schema({
  googleID: String,
});

mongoose.model("users", userSchema);
