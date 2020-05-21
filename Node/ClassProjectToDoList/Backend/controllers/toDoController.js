const UserModel = require('../models/userModel')
const ToDoModel = require('../models/toDoModel')

createToDoItem = async (req, res) => {
  let data = req.body;
  try {
    let user = req.user
    let todoItem = new ToDoModel();
    todoItem.title = data.title;
    todoItem.user = user._id
    let createdToDoItem = await todoItem.save()
    res.json(createdToDoItem)
  } catch (e) {
    res.status(400).json(e)
  }
}

getAllUserItem = async (req, res) => {
  let page = Number(req.params.page)
  let limit = Number(req.params.limit)

  let skip = (page - 1) * limit

  let userId = req.user._id
  try {
    let items = await ToDoModel.find({
      user: userId
    }).limit(limit).skip(skip).sort({
      createdAt: -1
    });
    let count = await ToDoModel.count({
      user: userId
    })
    let response = {
      items,
      count
    }

    res.json(response)
  } catch (e) {
    res.status(400).json(e)
  }
}

getSingleItem = async (req, res) => {
  let itemId = req.params.itemId;
  try {
    let item = await ToDoModel.findOne({
      _id: itemId,
      user: req.user._id
    })
    res.json(item)
  } catch (e) {
    res.status(400).json(e)
  }
}

deleteItem = async (req, res) => {
  let itemId = req.params.itemId;
  try {
    let response = await ToDoModel.deleteOne({
      _id: itemId,
      user: req.user._id
    })
    console.log(response)
    if (response.deletedCount == 0) res.status(400).json("item doesnt exist")
    res.json('item deleted')
  } catch (e) {
    res.status(400).json("item cant be deleted")
  }
}

toggleItemChecked = async (req, res) => {
  let itemId = req.params.itemId;
  try {
    let item = await ToDoModel.findOne({
      _id: itemId,
      user: req.user._id
    })
    item.checked = !item.checked;
    await item.save()
    res.json(item)
  } catch (e) {
    res.status(400).json(e)
  }
}

// pakeisti is checked false i true ir is checked true i false

// delete item

module.exports = {
  createToDoItem,
  getAllUserItem,
  getSingleItem,
  deleteItem,
  toggleItemChecked
}