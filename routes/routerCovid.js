const router = require('express').Router()
const ControllerCovid = require('../Controllers/ControllerCovid')

router.get('/', ControllerCovid.currentCovidStats)

module.exports = router