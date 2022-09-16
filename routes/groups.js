const { Router } = require('express');
const router = Router();
const GroupControllers = require('../controllers/group_controllers');

router.get('/:id', GroupControllers.get)

module.exports = router;