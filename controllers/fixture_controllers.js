const db = require('../models/index');
const { startQatar } = require('./tournament_controllers');
const { startTeams } = require('./team_controllers');
const Fixture = db.Fixture;
const Tournament = db.Tournament;
const Group = db.Group;

class FixtureControllers {

    async getAll(req, res) {
        const fixtures = await Fixture.findAll();
        res.status(200).json({
            ok: true,
            data: fixtures
        })
    }

    async get(req, res) {
        const { id } = req.params;
        try {
            const fixture = await Fixture.findByPk(id, {
                include: {
                    model: Tournament,
                    as: 'tournament'
                }
            })
            if (!fixture) {
                return res.status(404).json({
                    ok: false,
                    msg: 'Empty.'
                });
            }
            res.status(200).json({
                ok: true,
                data: fixture
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                ok: false,
                msg: 'Server side error.'
            });
        }
    }

    async create(req, res) {
        const { name } = req.body;
        try {

            const ownerId = req.user.id;

            const fixture = await Fixture.create({
                name,
                ownerId
            })

            await startQatar(fixture.id)
            
            res.status(200).json({
                ok: true,
                data: fixture
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                ok: false,
                msg: 'Server side error.'
            });
        }
    }

}

module.exports = new FixtureControllers();