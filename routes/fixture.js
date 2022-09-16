const { Router } = require('express');
const { check } = require('express-validator')
const FixtureControllers = require('../controllers/fixture_controllers');
const GroupControllers = require('../controllers/group_controllers');
const { fieldsCheck } = require('../middlewares/fieldsCheck');
const { isAuth } = require('../middlewares/isAuth');
const router = Router();

router.get('/:id', [
    isAuth
], FixtureControllers.get);

router.post('/', [
    isAuth,
    check('name', 'Required field.').not().isEmpty(),
    fieldsCheck
], FixtureControllers.create);

module.exports = router;