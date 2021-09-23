const router = require('express').Router()
const ControllerNodemailer = require('../Controllers/ControllerNodemailer')
const authentication = require('../middlewares/authentication')

router.use(authentication)

router.post('/', ControllerNodemailer.chatWithDoctor)

module.exports = router