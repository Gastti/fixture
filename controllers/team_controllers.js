const db = require('../models/index');
const Team = db.Team;

class TeamControllers {
    seed(groupId, teams) {
        teams.forEach(async team => {
            const { name, icon, location } = team;
            await Team.create({ name, icon, location, groupId });
        })
    }
}

module.exports = new TeamControllers();