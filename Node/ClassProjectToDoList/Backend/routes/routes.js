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



const userController = require('../controllers/userController')
const toDoController = require('../controllers/toDoController')
const middleware = require('../middleware/middleware')
const privateInfoController = require('../controllers/privateInfoController')


// user routes
router.post('/user/register', userController.register)
router.post('/user/login', userController.login)
router.get('/user/logout', middleware.authenticate, userController.logout)
router.get('/getAllUsers', middleware.authenticate, userController.getAllUsers)
router.post('/user/changePassword', userController.changePassword)
router.post('/user/changeProfilePicture', middleware.authenticate, upload.single('profilePicture'), userController.changePicture)

// todoItem routes
router.post('/createToDoItem', middleware.authenticate, toDoController.createToDoItem)
router.get('/getAllUserItem/:page/:limit', middleware.authenticate, toDoController.getAllUserItem)
router.get('/getSingleItem/:itemId', middleware.authenticate, toDoController.getSingleItem)
router.get('/deleteSingleItem/:itemId', middleware.authenticate, toDoController.deleteItem)
router.get('/toggleItemChecked/:itemId', middleware.authenticate, toDoController.toggleItemChecked)

//privateInfo
router.post('/privateInfo', middleware.authenticate, privateInfoController.create)


module.exports = router