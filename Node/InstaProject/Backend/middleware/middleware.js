const jwt = require('jsonwebtoken')
const UserModel = require('../models/userModel')
const {secretPassword}
 = require('../config/config')
test = (req, res, next) => {
    let allowed = true;
    if (alloud) {
        next();
    } else {
        res.status(400).json("alloud is set to false")
    }

}

authenticate = async (req, res, next) => {
    let token = req.header('x-auth-node')
    if (!token) return res.status(403).json('You are not authorized')
    try {
    let decoded = jwt.verify(token, secretPassword);
    //
    let user = await UserModel.findOne({
        _id: decoded.id,
        "tokens.token": token
        
    })
    if (!user) throw 'e'
    req.user = user
    
    next()
    } catch (e) {
    return res.status(403).json('You are not authorized') 
    }
    
}


module.exports = {
    test,
    authenticate
}