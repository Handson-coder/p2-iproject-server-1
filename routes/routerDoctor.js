const router = require('express').Router()
const ControllerDoctor = require('../Controllers/ControllerDoctor')
const authentication = require('../middlewares/authentication')


router.get('/:slug', ControllerDoctor.doctorProfile)
router.use(authentication)
router.get('/specialist/:id', ControllerDoctor.findOneDoctor)

module.exports = router