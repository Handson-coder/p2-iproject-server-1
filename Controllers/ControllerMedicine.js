const axios = require('axios')
const ROOT_URL = `https://www.halodoc.com`

class ControllerMedicine {
  static async listOfMedicineCategories(req, res, next) {
    try {
      const url = `${ROOT_URL}/api/v1/buy-medicine/categories`
      const result = await axios.get(url)
      return res.status(200).json(result.data)
    } catch (err) {
      next(err)
    }
  }

  static async detailCategoryOfMedicine(req, res, next) {
    try {
      const url = `${ROOT_URL}/api/v1/buy-medicine/categories/${req.params.slug}/products?page=${req.params.count}&size=20`
      const result = await axios.get(url)
      return res.status(200).json(result.data.result)
    } catch (err) {
      next(err)
    }
  } // pada saat nekan gambar categorynya

  static async detailMedicineProduct(req, res, next) {
    console.log(req.params.slug);
    try {
      const url = `${ROOT_URL}/api/v1/buy-medicine/products/detail/${req.params.slug}`
      const result = await axios.get(url)
      return res.status(200).json(result.data)
    } catch (err) {
      next(err)
    }
  } // utk searching nama obat

  static async similarProductOfMedicineProduct(req, res, next) {
    try {
      const url = `${ROOT_URL}/api/v1/buy-medicine/products/similar-items/${req.params.slug}`
      const result = await axios.get(url)
      return res.status(200).json(result.data)
    } catch (err) {
      next(err)
    }
  } //utk option pembantu di colom search website
}

module.exports = ControllerMedicine