const PostModel = require('../models/postModel')

createPost= async (req, res) => {
    let data = req.body;
    try {
      let user = req.user
      let post = new PostModel();
      post.caption = data.caption;
      post.user = user._id
      let createdPost = await post.save()
      res.json(createdPost)
    } catch (e) {
      res.status(400).json(e)
    }
  }

  getAllUserPosts = async (req,res) => {

    let userId = req.user._id
    try {
        
        let items = await PostModel.find({
            user: userId
        })
        .populate('user', '_id firstname');
        let response = {
            items
        }
        
        res.json(response)
    } catch (e) {
        res.status(400).json(e)
    }
  }


  module.exports = {
    createPost,
    getAllUserPosts
  }