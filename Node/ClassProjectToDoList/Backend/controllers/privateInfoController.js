const PrivateInfoModel = require('../models/privateInfoModel')

create = async (req, res) => {
    let privateInfo = new PrivateInfoModel()
    privateInfo.phoneNumber = req.body.phoneNumber;
    try {
    let response = await privateInfo.save();
    let user = req.user
    user.privateInfo = response._id
    await user.save()
    res.json(response)
    } catch(e) {

    }
}



module.exports = {
    create
}