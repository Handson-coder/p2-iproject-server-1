const router = require('express').Router()
const routerMedicine = require('./routerMedicine')
const routerDoctor = require('./routerDoctor')
const routerHospital = require('./routerHospital')
const routerCovid = require('./routerCovid')
const routerProvince = require('./routerProvince')
const routerUser = require('./routerUser')

router.use('/medicines', routerMedicine)
router.use('/doctors', routerDoctor)
router.use('/hospitals', routerHospital)
router.use('/covid19/stats', routerCovid)
router.use('/provinces', routerProvince)
router.use('/users', routerUser)

module.exports = router