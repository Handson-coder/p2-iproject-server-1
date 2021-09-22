const router = require('express').Router()
const routerMedicine = require('./routerMedicine')
const routerDoctor = require('./routerDoctor')
const routerHospital = require('./routerHospital')
const routerCovid = require('./routerCovid')
const routerProvince = require('./routerProvince')

router.use('/medicines', routerMedicine)
router.use('/doctors', routerDoctor)
router.use('/hospitals', routerHospital)
router.use('/covid19/stats', routerCovid)
router.use('/provinces', routerProvince)

module.exports = router