const axios = require('axios')
const HOSPITAL_URL = `https://dekontaminasi.com/api/id/covid19/hospitals`

class ControllerHospitalAPI {
	static async findAllHospitalsAPI(req, res, next) {
		try {
			const url = HOSPITAL_URL
			const result = await axios.get(url)
			return res.status(200).json(result.data)
		} catch (err) {
			next(err)
		}
	}
}

module.exports = ControllerHospitalAPI