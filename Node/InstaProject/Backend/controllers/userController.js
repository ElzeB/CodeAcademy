const bcrypt = require('bcrypt')
const UserModel = require('../models/userModel')
const jwt = require('jsonwebtoken')
const {
    secretPassword
  } = require('../config/config')

register = async (req, res) => {
    let data = req.body
    let user = new UserModel()
  
    user.firstname = data.firstname;
    user.lastname = data.lastname;
    user.email = data.email;
    user.username = data.username;
    user.password = data.password;
  
    try {
      let createdUser = await user.save()
      res.json(createdUser)
    } catch (e) {
      res.status(400).json(e)
    }
  
  }

  getAllUsers = async (req, res) => {
    
    try {
      let allUsers = await UserModel.find().populate('privateInfo');
      res.json(allUsers)
    } catch (e) {
      res.status(400).json(e)
    }
  }

  login = async (req, res) => {
    let data = req.body;
    try {
      let user = await UserModel.findOne({
        email: data.email
      });
      if (!user) return res.status(400).json('No such user')
      const match = await bcrypt.compare(data.password, user.password);
      if (!match) return res.status(400).json('Wrong password')
  
      let role = 'userRole'
      let token = jwt.sign({
        id: user._id
      }, secretPassword);
  
      user.tokens.push({
        token: token,
        role: role
      })
      user.save()
  
      res.header('x-auth-node', token).json(user)
    } catch (e) {
      res.status(400).json(e)
    }
  }

  logout = async (req, res) => {
    let user = req.user
    let token = req.token
    await user.update({
      $pull: {
        tokens: {
          token: token
        }
      }
    })
    res.json('successfully signed out')
  }

  changePicture = async (req, res) => {
    
    let user = req.user
    user.profilePicture = `http://localhost:3000/${req.file.path}`
    let savedUser = await user.save()
    
    
    res.json(savedUser)
  }

  
  module.exports = {
    register,
    getAllUsers,
    login,
    changePicture,
    logout
  }