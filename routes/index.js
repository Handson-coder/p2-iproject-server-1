const router = require('express').Router()
const routerMedicine = require('./routerMedicine')
const routerDoctor = require('./routerDoctor')
const routerHospital = require('./routerHospital')
const routerCovid = require('./routerCovid')

router.use('/medicine', routerMedicine)
router.use('/doctor', routerDoctor)
router.use('/hospital', routerHospital)
router.use('/covid19/stats', routerCovid)

module.exports = router