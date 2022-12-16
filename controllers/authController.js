const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const authController = {
    register: async (req, res) => {
        try {
            const username = req.body.username;
            const password = req.body.password;
            const email = req.body.email;

            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            let existedEmail = await User.findOne({ email: email });

            if (!existedEmail) {
                let newUser = {
                    username: username,
                    email: email,
                    password: hashedPassword,
                };
                const user = await User.create(newUser);
                console.log(user);
                return res.status(200).json('Successful account registration');
            } else {
                return res.status(404).json('Email already exists');
            }

        } catch (error) {
            return res.status(500).json({ success: false, message: 'Server Error' });
        }
    },
    generateAccessToken: (user) => {
        return jwt.sign({
            id: user._id,
            role: user.role
        }, process.env.JWT_ACCESS_KEY, { expiresIn: '15m' });
    },
    login: async (req, res) => {
        try {
            const email = req.body.email;
            const password = req.body.password;

            const user = await User.findOne({ email: email });

            if (user) {
                let validPassword = await bcrypt.compare(password, user.password);
                if (validPassword) {
                    const accessToken = authController.generateAccessToken(user);
                    return res.status(200).json({ token: accessToken });
                } else {
                    return res.status(404).json({ success: false, message: 'Incorrect password' });
                }
            } else {
                return res.status(404).json({ success: false, message: 'Email does not exist' });
            }

        } catch (error) {
            return res.status(500).json({ success: false, message: 'Server Error' });
        }
    },
}

module.exports = authController;