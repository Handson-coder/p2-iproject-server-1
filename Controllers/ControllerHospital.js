const axios = require('axios')
const ROOT_URL = `https://www.halodoc.com`

class ControllerHospital {
  static async hospitalProfile(req, res, next) {
    try {
      const url = `${ROOT_URL}/api/rumah-sakit/v1/hospitals/slug/${req.params.slug}`
      const category = await axios.get(url)
      return res.status(200).json(category.data)
    } catch (err) {
      next(err)
    }
  }
}

module.exports = ControllerHospital