const { Router } = require('express');
const Team = require('../controllers/team_controllers');
const router = Router();

router.post('/:tournamentId', Team.startTeams);

module.exports = router;