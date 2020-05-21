const mongoose = require("mongoose");

const InfoSchema = new mongoose.Schema({
  phoneNumber: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  dob: {
    type: Date,
    required: false,
  },
  age: {
    type: Number,
    required: false,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
});
InfoSchema.pre("save", function (next) {
  let item = this;
  console.log("here");
  if (item.isModified("dob")) {
    item.age = new Date().getFullYear() - item.dob.getFullYear();
    console.log(item);
    next();
  } else {
    next();
  }
});
const InfoModel = mongoose.model("Info", InfoSchema);
module.exports = InfoModel;