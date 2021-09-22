const router = require('express').Router()
const ControllerHospital = require('../Controllers/ControllerHospital')

// router.get('/:name', ControllerHospital.hospitalProfile)
router.get('/:slug', ControllerHospital.hospitalProfile)
router.get('/', ControllerHospital.findAllHospital)

module.exports = router