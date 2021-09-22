const router = require('express').Router()
const ControllerProvince = require('../Controllers/ControllerProvince')

router.get('/', ControllerProvince.findAllProvinces)

module.exports = router