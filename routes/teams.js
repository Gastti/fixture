const { Router } = require('express');
const TeamControllers = require('../controllers/team_controllers');
const router = Router();

router.get('/', TeamControllers.getAll)

module.exports = router;