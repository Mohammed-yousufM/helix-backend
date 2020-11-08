const mongoose = require("mongoose");

const courseDetailsSchema = new mongoose.Schema({
  title: String,
  Description: String,
  Duration: Number,
});

mongoose.model("courseDetails", courseDetailsSchema);
