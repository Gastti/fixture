const db = require('../models/index');
const GroupControllers = require('./group_controllers');
const Tournament = db.Tournament;
const Group = db.Group;

class TournamentControllers {

    async getOne(req, res) {
        const { id } = req.params;
        try {
            const tournament = await Tournament.findByPk(id, {
                include: {
                    model: Group,
                    as: 'groups'
                }
            });
            res.status(200).json({
                ok: true,
                data: tournament
            })
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                ok: false,
                msg: 'Server side error.'
            })
        }

    }

    async startQatar(fixtureId) {
        const qatar_config = {
            name: 'FIFA World Cup Qatar 2022',
            description: "The main official international men's soccer tournament at the level of national teams in the world.",
        }

        const tournament = await Tournament.create({
            name: qatar_config.name,
            description: qatar_config.description,
            fixtureId
        })

        await GroupControllers.start(tournament.id);
    }

}

module.exports = new TournamentControllers();