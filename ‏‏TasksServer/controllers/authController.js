const authService = require('../services/authService');


const createUser = async (req, res) => {
    try {
        const { user } = req.body;
        const newUser = await authService.createUser(user);
        return res.status(200).json(newUser);
    }
    catch (err) {
        return res.status(500).send("Internal Server Error");
    }
}

const login = async (req, res) => {
    try {
        const { user } = req.body;
        const userData = await authService.login(user);
        if (!userData)
            return res.status(400).send("Email or password is incorrect");

        return res.status(200).json(userData);
    }
    catch (err) {
        return res.status(500).send("Internal Server Error");
    }
}

module.exports = {
    createUser,
    login
}