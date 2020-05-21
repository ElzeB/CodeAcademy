const mongoose = require('mongoose')

const PrivateInfoModelSchema = new mongoose.Schema ({
    phoneNumber: {
        type: String,
        required: false
    }
})

const PrivateInfoModel = mongoose.model('PrivateInfo', PrivateInfoModelSchema)

module.exports = PrivateInfoModel