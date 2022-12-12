const jwt = require('jsonwebtoken');

const middlewareController = {
    verifyToken: (req, res, next) => {
        const token = req.headers.token;
        if (token) {
            const accessToken = token.split(" ")[1];
            jwt.verify(accessToken, process.env.JWT_ACCESS_KEY, (err, user) => {
                if (err) {
                    return res.status(403).json({success: false, message: 'Invalid Token'});
                }
                req.user = user;
                next();
            })
        } else{
            return res.status(401).json({success: false, message: 'You are not authenticated'});
        }
    },
}

module.exports = middlewareController;