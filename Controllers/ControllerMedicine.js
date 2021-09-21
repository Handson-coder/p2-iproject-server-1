const axios = require('axios')
const ROOT_URL = `https://www.halodoc.com`

class ControllerMedicine {
  static async listOfMedicineCategories(req, res, next) {
    try {
      const url = `${ROOT_URL}/api/v1/buy-medicine/categories`
      const category = await axios.get(url)
      return res.status(200).json(category.data)
    } catch (err) {
      next(err)
    }
  }

  static async detailCategoryOfMedicine(req, res, next) {
    try {
      const url = `${ROOT_URL}/api/v1/buy-medicine/categories/${req.params.slug}/products?page=${req.params.count}&size=20`
      const category = await axios.get(url)
      return res.status(200).json(category.data.result)
    } catch (err) {
      res.status(400)
      next(err)
    }
  } // pada saat nekan gambar categorynya

  static async detailMedicineProduct(req, res, next) {
    console.log(req.params.slug);
    try {
      const url = `${ROOT_URL}/api/v1/buy-medicine/products/detail/${req.params.slug}`
      const category = await axios.get(url)
      return res.status(200).json(category.data)
    } catch (err) {
      res.status(400)
      next(err)
    }
  } // utk searching nama obat

  static async similarProductOfMedicineProduct(req, res, next) {
    try {
      const url = `${ROOT_URL}/api/v1/buy-medicine/products/similar-items/${req.params.slug}`
      const category = await axios.get(url)
      return res.status(200).json(category.data)
    } catch (err) {
      res.status(400)
      next(err)
    }
  } //utk option pembantu di colom search website
}

module.exports = ControllerMedicine