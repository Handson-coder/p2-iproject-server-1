const router = require('express').Router()
const ControllerMedicine = require('../Controllers/ControllerMedicine')
const authentication = require('../middlewares/authentication')

router.use(authentication)

router.get('/categories', ControllerMedicine.listOfMedicineCategories)
router.get('/categories/:slug/page/:count', ControllerMedicine.detailCategoryOfMedicine)
router.get('/detail/:slug', ControllerMedicine.detailMedicineProduct)
router.get('/similar/:slug', ControllerMedicine.similarProductOfMedicineProduct)

module.exports = router 