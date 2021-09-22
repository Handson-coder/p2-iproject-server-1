const axios = require('axios')
const COVID_URL = 'https://dekontaminasi.com/api/id/covid19/stats'

class ControllerCovid {
	static async currentCovidStats(req, res, next) {
		try {
			const url = `${COVID_URL}`
			const result = await axios.get(url)
			return res.status(200).json(result.data)
		} catch (err) {
			next(err)
		}
	}
}

module.exports = ControllerCovid