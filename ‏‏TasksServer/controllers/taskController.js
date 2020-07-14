const taskService = require('../services/taskService');


const getTasks = async (req, res) => {
    try {
        const { isAdmin, email } = req.user;
        const tasks = await taskService.getTasks(isAdmin, email);
        return res.json(tasks);
    }
    catch (err) {
        return res.status(500).send("Internal Server Error");
    }
}

const updateTask = (req, res) => {
    try {
        const { task } = req.body;
        const { id } = req.params;
        const tasks = taskService.updateTask(task, id);
        return res.status(200).json(tasks);
    }
    catch (err) {
        return res.status(500).send("Internal Server Error");
    }
}

const createTask = async (req, res) => {
    try {
        const { task } = req.body;
        const newTask = await taskService.createTask(task);
        return res.status(200).json(newTask);
    }
    catch (err) {
        return res.status(500).send("Internal Server Error");
    }
}

const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        await taskService.deleteTask(id);
        return res.status(200);
    }
    catch (err) {
        return res.status(500).send("Internal Server Error");
    }
}

module.exports = {
    getTasks,
    deleteTask,
    updateTask,
    createTask
}