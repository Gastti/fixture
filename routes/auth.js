const { Router } = require('express');
const { check } = require('express-validator')
const Auth = require('../controllers/auth_controllers');
const { fieldsCheck } = require('../middlewares/fieldsCheck');
const router = Router();

router.post('/register', [
    check('firstName', 'Required field.').not().isEmpty(),
    check('lastName', 'Required field.').not().isEmpty(),
    check('email', 'Required field.').not().isEmpty(),
    check('password', 'Required field.').not().isEmpty(),
    fieldsCheck
], Auth.register)

router.post('/login', [
    check('email', 'Required field.').not().isEmpty(),
    check('password', 'Required field.').not().isEmpty(),
    fieldsCheck
], Auth.login)

module.exports = router;