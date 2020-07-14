const { User } = require('../models/user');
const jwt = require('jsonwebtoken');


const createUser = async (user) => {
    return await User.create(user);
}


const login = async (loginUser) => {
    const { email, password } = loginUser;

    const user = await User.findOne({ email, password });
    const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;

    if (user) {
        const accessToken = jwt.sign({ email: user.email, role: user.role }, accessTokenSecret);
        return { accessToken };

    } else {
        return user;
    }
}


module.exports = {
    createUser,
    login
}
