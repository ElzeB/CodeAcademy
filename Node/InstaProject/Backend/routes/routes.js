const router = require('express').Router();
const multer = require('multer')


const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'upload/')
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + file.originalname)
  }
})

const upload = multer({
  storage: storage
})

const middleware = require('../middleware/middleware')
const userController = require('../controllers/userController')
const postController = require('../controllers/postController')


// user routes
router.post('/user/register', userController.register)
router.post('/user/login', userController.login)
router.get('/user/logout', middleware.authenticate, userController.logout)
router.get('/user/getAllUsers', userController.getAllUsers)
router.post('/user/changeProfilePicture', middleware.authenticate, upload.single('profilePicture'), userController.changePicture)

//post routes
router.post('/createPost', middleware.authenticate, postController.createPost)
router.get('/getPosts', middleware.authenticate, postController.getAllUserPosts)

module.exports = router