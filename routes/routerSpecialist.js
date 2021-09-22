const router = require('express').Router()
const ControllerSpecialist = require('../Controllers/ControllerSpecialist')
const authentication = require('../middlewares/authentication')

router.use(authentication)
router.get('/', ControllerSpecialist.findAllSpecialists)

module.exports = router