const router = require('express').Router()
const ControllerHospital = require('../Controllers/ControllerHospital')

router.get('/:slug', ControllerHospital.hospitalProfile)

module.exports = router 