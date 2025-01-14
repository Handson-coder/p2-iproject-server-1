const router = require('express').Router()
const ControllerHospital = require('../Controllers/ControllerHospital')

router.get('/:slug', ControllerHospital.hospitalProfile)
router.get('/', ControllerHospital.findAllHospitals)

module.exports = router