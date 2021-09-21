const axios = require('axios')
const ROOT_URL = `https://www.halodoc.com`

class ControllerDoctor {
  static async doctorProfile(req, res, next) {
    try {
      const url = `${ROOT_URL}/api/rumah-sakit/v1/hospitals/personnel/slug/${req.params.slug}`
      const result = await axios.get(url)
      return res.status(200).json(result.data)
    } catch (err) {
      next(err)
    }
  }
}

module.exports = ControllerDoctor