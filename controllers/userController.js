const User = require('../models/User');

const userController = {
    getOne: async (req, res) => {
        try {
            const user = await User.findById(req.user).select('-__v -password -_id');
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json({ message: 'Lỗi server' });
        }
    },
}

module.exports = userController;