const User = require('../models/User');

const userController = {
    getAll: async (req, res) => {
        try {
            const user = await User.find();
            return res.status(200).json(user);
        } catch (error) {
            return res.status(500).json({ message: 'Lỗi server' });
        }
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id;

            const user = await User.findByIdAndDelete(id);
            if (user) {
                return res.status(200).json({ message: 'Xóa người dùng thành công' });
            } else {
                return res.status(400).json({ message: 'Không tìm thấy người dùng' })
            }
        } catch (error) {
            return res.status(500).json({ message: 'Lỗi server' });
        }
    }
}

module.exports = userController;