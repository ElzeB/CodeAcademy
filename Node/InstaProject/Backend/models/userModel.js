const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({

  email: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: false
  },
  password: {
    type: String,
    required: true
  },
  mobNr: {
    type: String,
    required: false,
    unique: true
  },
  firstname: {
    type: String,
    required: false
  },

    // following: {
    //   type: [Schema.Types.ObjectId],
    //   ref: 'User'
    // },
    // followers: {
    //   type: [Schema.Types.ObjectId],
    //   ref: 'User'
    // },
  tokens: [{
    token: {
      type: String
    },
    role: {
      type: String
    }
  }]

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