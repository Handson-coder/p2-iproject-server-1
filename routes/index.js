const router = require('express').Router()
const routerMedicine = require('./routerMedicine')

router.use('/medicine', routerMedicine)

module.exports = router