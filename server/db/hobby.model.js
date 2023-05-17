const mongoose = require("mongoose");

const { Schema } = mongoose;

const HobbyShema = new Schema({
  name: String,
  description: String
});

module.exports = mongoose.model("Hobby", HobbyShema);
