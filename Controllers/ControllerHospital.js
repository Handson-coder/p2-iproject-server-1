const axios = require('axios')
const ROOT_URL = `https://www.halodoc.com`
const HOSPITAL_URL = `https://dekontaminasi.com/api/id/covid19/hospitals`

class ControllerHospital {
  static async hospitalProfile(req, res, next) {
    // try {
    //   const url = `${ROOT_URL}/api/rumah-sakit/v1/hospitals/slug/${req.params.name}`
    //   const result = await axios.get(url)
    //   return res.status(200).json(result.data)
    // } catch (err) {
    //   next(err)
    // }

    try {
      const url = `${ROOT_URL}/api/rumah-sakit/v1/hospitals/slug/${req.params.slug}`
      const result = await axios.get(url)
      return res.status(200).json(result.data)
    } catch (err) {
      next(err)
    }
  }

  static async findAllHospital(req, res, next) {
    try {
      const url = `${HOSPITAL_URL}`
      const result = await axios.get(url)
      return res.status(200).json(result.data)
    } catch (err) {
      next(err)
    }
  }
}

module.exports = ControllerHospital