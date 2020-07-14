const { Task } = require('../models/task');


const getTasks = async (isAdmin, email) => {
    if (isAdmin)
        return await Task.find();
    else {
        return await Task.find({ email });
    }
}

const createTask = async (task) => {
    const { email, createDate, phone, userName } = task;
    return await Task.create({ email, createDate, phone, userName });
}


const deleteTask = async id => {
    return await Task.deleteOne({ _id: id });
}

const updateTask = async (data, id) => {

    const upsertData = Object.assign({}, data);
    delete upsertData._id;



    // var upsertData = data.toObject();

    // console.log(req.body.id); // OK

    // delete upsertData._id;
    return await Task.updateOne({ _id: id }, upsertData);
}

module.exports = {
    getTasks,
    deleteTask,
    updateTask,
    createTask
}
