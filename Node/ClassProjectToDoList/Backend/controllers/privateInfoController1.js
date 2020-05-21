const InfoModel = require("../models/privateInfoModel");
addInfo = async (req, res) => {
  try {
    let infoExists = await InfoModel.find({ user: req.user });
    if (infoExists.length >= 1) throw "User already added info";
    let info = new InfoModel();
    info.phoneNumber = req.body.phoneNumber;
    info.address = req.body.address;
    info.dob = req.body.dob;
    info.user = req.user;
    // info.age = new Date().getFullYear() - info.dob.getFullYear();
    let createdInfo = await info.save();
    res.json(createdInfo);
  } catch (e) {
    res.status(400).json(e);
  }
};

editInfo = async (req, res) => {
  try {
    const update = await InfoModel.findOneAndUpdate(
      { user: req.user },
      {
        $set: req.body,
        // phoneNumber: req.body.phoneNumber,
        // address: req.body.address,
        // dob: req.body.dob,
        // age: new Date().getFullYear() - new Date(req.body.dob).getFullYear(),
      }
    );
    res.json(update);
  } catch (e) {
    res.status(400).json(e);
  }
};
module.exports = {
  addInfo,
  editInfo,
};