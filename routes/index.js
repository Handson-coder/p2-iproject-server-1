const router = require('express').Router()
const routerMedicine = require('./routerMedicine')
const routerDoctor = require('./routerDoctor')
const routerHospital = require('./routerHospital')

router.use('/medicine', routerMedicine)
router.use('/doctor', routerDoctor)
router.use('/hospital', routerHospital)

module.exports = router