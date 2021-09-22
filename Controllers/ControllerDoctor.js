const axios = require('axios')
const ROOT_URL = `https://www.halodoc.com`
const { Doctor, Specialist } = require('../models')

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
	static async findOneDoctor(req, res, next) {
		const { id } = req.params	
		try {
			const result = await Doctor.findAll({
				where: { SpecialistId: +id },
				attributes: {
					exclude: ['createdAt', 'updatedAt']
				},
				include: [
					{
						model: Specialist,
						attributes: {
							exclude: ['createdAt', 'updatedAt']
						},
					}
				]
			})
			res.status(200).json(result)
		} catch (err) {
			next(err)
		}
	}
}

module.exports = ControllerDoctor