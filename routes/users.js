const { Router } = require('express');
const User = require('../controllers/users_controllers');
const router = Router();

router.get('/:id', User.get);

module.exports = router;