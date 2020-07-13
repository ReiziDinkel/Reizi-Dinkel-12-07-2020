const { Task } = require('../models/task');


const getTasks = async () => {
    return await Task.find();
}

const createTask = async (task) => {
    return await Task.create(task);
}


const deleteTask = async ids => {
    return await Task.deleteMany({ _id: ids });
}

const updateTask = async data => {
    return await Task.updateOne(data);
}

module.exports = {
    getTasks,
    deleteTask,
    updateTask,
    createTask
}
