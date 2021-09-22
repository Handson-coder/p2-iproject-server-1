const router = require('express').Router()
const ControllerUser = require('../Controllers/ControllerUser')
const authentication = require('../middlewares/authentication')

router.get('/', authentication, ControllerUser.userLoginned)
router.post('/register', ControllerUser.register)
router.post('/login', ControllerUser.login)
router.post('/auth/google', ControllerUser.googleAuthLogin)

module.exports = router