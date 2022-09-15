const db = require('../models/index.js');
const User = db.User;
const Fixture = db.Fixture;

class UserControllers {

    async get(req, res) {
        const { id } = req.params;
        const users = await User.findByPk(id, {
            include: {
                model: Fixture,
                as: 'fixtures',
                attributes: {
                    exclude: ['createdAt', 'updatedAt', 'deletedAt']
                }
            }
        });
        if (!users) return res.status(404).json({ ok: false, msg: '404 Not found.' })
        res.status(200).json({
            ok: true,
            users
        })
    }

}

module.exports = new UserControllers();