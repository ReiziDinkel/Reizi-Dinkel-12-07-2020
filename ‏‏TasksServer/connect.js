const mongoose = require('mongoose');

const connect = () => {
    mongoose.connect(`${process.env.DB_HOST}/${process.env.DB_NAME}`, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
}

module.exports = {
    connect
}