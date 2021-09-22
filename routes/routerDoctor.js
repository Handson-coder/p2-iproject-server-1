const router = require('express').Router()
const ControllerDoctor = require('../Controllers/ControllerDoctor')

router.get('/:slug', ControllerDoctor.doctorProfile)
router.get('/', ControllerDoctor.findAllDoctors)

module.exports = router