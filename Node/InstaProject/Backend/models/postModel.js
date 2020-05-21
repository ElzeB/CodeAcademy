const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    caption: {
      type: String,
      required: true,
    },
    picture: {
      type: String
    },
    comment: {
        type: String
    }
    // likes: {
    //   type: number
    // }

})

const PostModel = mongoose.model('Post', PostSchema)

module.exports = PostModel