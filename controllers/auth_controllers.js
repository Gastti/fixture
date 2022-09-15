const db = require('../models/index');
const User = db.User;
const bcryptjs = require('bcryptjs');
const Token = require('../helpers/jsonwebtoken');
const { createToken } = require('../helpers/jsonwebtoken');

class AuthControllers {

    async register(req, res) {
        const { firstName, lastName, email, password } = req.body;

        try {

            const user = await User.create({
                firstName,
                lastName,
                email,
                password,
                roleId: 2
            })

            const salt = bcryptjs.genSaltSync(10);
            user.password = bcryptjs.hashSync(password, salt);
            user.save();

            res.status(200).json({
                ok: true,
                msg: 'Account created successfully.'
            })
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                ok: false,
                msg: 'Server side error. Contact an admin.',
                error
            })
        }
    }

    async login(req, res) {
        const { email, password } = req.body;

        try {
            const user = await User.findOne({ where: { email: email } });

            if (!user) {
                return res.status(404).json({
                    ok: false,
                    msg: 'There is no account with this email.'
                })
            }

            const validPassword = bcryptjs.compareSync(password, user.password);
            if (!validPassword) {
                return res.status(400).json({
                    ok: false,
                    msg: 'Password incorrect.'
                })
            }

            const token = await Token.create(user.id)
            res.json({
                ok: true,
                msg: 'You have successfully logged in.',
                token
            })

        } catch (error) {
            console.log(error);
            return res.status(500).json({
                ok: false,
                msg: 'Server side error. Contact an admin.'
            })
        }
    }

}

module.exports = new AuthControllers();