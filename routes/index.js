const router = require('express').Router()
const routerMedicine = require('./routerMedicine')
const routerDoctor = require('./routerDoctor')

router.use('/medicine', routerMedicine)
router.use('/doctor', routerDoctor)

module.exports = router