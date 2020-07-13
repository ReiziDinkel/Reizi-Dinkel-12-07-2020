const { User } = require('../models/user');
const jwt = require('jsonwebtoken');


const createUser = async (user) => {
    return await User.create(user);
}


const login = async (user1) => {
    const { email, password } = user1;

    // Filter user from the users array by username and password
    const user = await User.findOne({ email, password });
    const accessTokenSecret = 'youraccesstokensecret';

    if (user) {
        // Generate an access token
        const accessToken = jwt.sign({ username: user.username, role: user.role }, accessTokenSecret);


        return { accessToken, email: user.email };

    } else {
        return user;
    }
}


module.exports = {
    createUser,
    login
}
