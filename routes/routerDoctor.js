const router = require('express').Router()
const ControllerDoctor = require('../Controllers/ControllerDoctor')
const authentication = require('../middlewares/authentication')


router.use(authentication)
router.get('/:slug', ControllerDoctor.doctorProfile)
router.get('/specialist/:id', ControllerDoctor.findAllDoctor)

module.exports = router