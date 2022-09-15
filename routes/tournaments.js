const { Router } = require('express');
const Tournament = require('../controllers/tournament_controllers');
const router = Router();

router.get('/:id', Tournament.getOne);

module.exports = router;