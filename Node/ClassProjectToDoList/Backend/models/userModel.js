const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: false
  },
  lastname: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  profilePicture: {
    type: String
  },
  password: {
    type: String,
    required: false
  },
  privateInfo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PrivateInfo'

  },
  tokens: [{
    token: {
      type: String
    },
    role: {
      type: String
    }
  }]
})


UserSchema.pre('find', function(next) {
  let query = this;
  query.select('-password').select('-tokens');//GetAllUsers gautoje info neberodo passowrd ir tokens
  next()
})


UserSchema.pre('save', function(next) {
  let user = this;
  if (user.isModified('password')) {
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(user.password, salt, function(err, hash) {
        user.password = hash
        next()
      })
    })
  } else {
    next()
  }
})



const UserModel = mongoose.model('User', UserSchema)

module.exports = UserModel