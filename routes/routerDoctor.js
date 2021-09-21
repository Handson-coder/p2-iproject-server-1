const router = require('express').Router()
const ControllerDoctor = require('../Controllers/ControllerDoctor')

router.get('/:slug', ControllerDoctor.doctorProfile)

module.exports = router