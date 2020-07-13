const mongoose = require('mongoose')

const User = mongoose.model('User', new mongoose.Schema({
    email: {
        type: String
    },
    password: {
        type: String
    },
    role: {
        type: String
    }
}));


module.exports = {
    User
}
