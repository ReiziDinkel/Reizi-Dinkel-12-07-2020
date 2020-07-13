const mongoose = require('mongoose')

const Task = mongoose.model('Task', new mongoose.Schema({
    userName: {
        type: String
    },
    phone: {
        type: String
    },
    email: {
        type: String
    },
    createDate: {
        type: String
    }
}));


module.exports = {
    Task
}
