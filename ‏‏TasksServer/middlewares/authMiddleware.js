const jwt = require('jsonwebtoken');

const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const accessTokenSecret = 'youraccesstokensecret';

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(authHeader, accessTokenSecret, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }

            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

module.exports={
    authenticateJWT
}