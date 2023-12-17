const mongoose = require("mongoose");

const dataSchema = mongoose.Schema(
  {
    name: String,
    tel: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Data", dataSchema);
