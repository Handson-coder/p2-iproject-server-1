const { Province } = require('../models')

class ControllerProvince {
	static async findAllProvinces(req, res, next) {
		try {
			const result = await Province.findAll({
				attributes: {
					exclude: ['createdAt', 'updatedAt']
				}
			})
			res.status(200).json(result)
		} catch (err) {
			next(err)
		}
	}
}

module.exports = ControllerProvince