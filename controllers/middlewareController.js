const jwt = require('jsonwebtoken');

const middlewareController = {
    verifyToken: (req, res, next) => {
        const token = req.headers.token;
        if (token) {
            const accessToken = token.split(" ")[1];
            jwt.verify(accessToken, process.env.JWT_ACCESS_KEY, (err, user) => {
                if (err) {
                    return res.status(403).json({ message: 'Invalid Token'});
                }
                req.user = user;
                next();
            })
        } else{
            return res.status(401).json({ message: 'You are not authenticated'});
        }
    },
    isAdmin: (req, res, next) => {
        if (req.user.role == 0) {
            next();
        } else {
            return res.status(403).json({ message: 'You are not admin'});
        }
    },
    isUser: (req, res, next) => {
        if (req.user.role <= 1) {
            next();
        } else {
            return res.status(403).json({ message: 'You are not user'});
        }
    },
}

module.exports = middlewareController;