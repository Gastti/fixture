const { Router } = require('express');
const { check } = require('express-validator')
const Fixture = require('../controllers/fixture_controllers');
const Group = require('../controllers/group_controllers');
const { fieldsCheck } = require('../middlewares/fieldsCheck');
const { isAuth } = require('../middlewares/isAuth');
const router = Router();

// router.get('/:id', Fixture.get);
router.get('/', Fixture.getAll);
router.post('/', [
    isAuth,
    check('name', 'Required field.').not().isEmpty(),
    fieldsCheck
], Fixture.create);

router.get('/teams', Group.getGroup)

module.exports = router;