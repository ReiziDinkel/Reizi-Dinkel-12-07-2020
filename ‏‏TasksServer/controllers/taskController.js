const taskService = require('../services/taskService');

const getTasks = async (req, res) => {
    try {
        const tasks = await taskService.getTasks();
        return res.json(tasks);
    }
    catch (err) {
        return res.status(500).send("Internal Server Error");
    }
}

const updateTask = (req, res) => {
    try {
        const { task } = req.body;
        const tasks = taskService.updateTask(task);
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

const createUser = async (req, res) => {
    try {
        const { user } = req.body;
        const newUser = await taskService.createUser(user);
        return res.status(200).json(newTask);
    }
    catch (err) {
        return res.status(500).send("Internal Server Error");
    }
}

const login = async (req, res) => {
    try {
        const { user } = req.body;
        const newUser = await taskService.login(user);
        return res.status(200).json(newUser);
    }
    catch (err) {
        return res.status(500).send("Internal Server Error");
    }
}

const deleteTask = async (req, res) => {
    try {
        const data = req.body;
        await taskService.deleteTask(data);
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
    createTask,
    createUser,
    login
}