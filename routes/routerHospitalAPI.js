const router = require('express').Router()
const ControllerHospitalAPI = require('../Controllers/ControllerHospitalAPI')

router.get('/', ControllerHospitalAPI.findAllHospitalsAPI)

module.exports = router