const router = require('express').Router()
const ControllerNodemailer = require('../Controllers/ControllerNodemailer')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.use(authentication)

router.post('/', authorization, ControllerNodemailer.chatWithDoctor)

module.exports = router