const router = require('express').Router()
const ControllerSpecialist = require('../Controllers/ControllerSpecialist')

router.get('/', ControllerSpecialist.findAllSpecialists)

module.exports = router