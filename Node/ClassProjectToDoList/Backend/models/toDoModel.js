const mongoose = require('mongoose')


const ToDoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 3
    },
    checked: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

const ToDoModel = mongoose.model('ToDo', ToDoSchema)

module.exports = ToDoModel;