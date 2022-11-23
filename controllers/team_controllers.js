const db = require('../models/index');
const Team = db.Team;
const Group = db.Group;

class TeamControllers {
    seed(groupId, teams) {
        teams.forEach(async team => {
            const { name, icon, location } = team;
            await Team.create({ name, icon, location, groupId });
        })
    }

    async getAll(req, res) {
        const teams = await Team.findAll({
            include: [{
                model: Group
            }]
        })
    }
}

module.exports = new TeamControllers();