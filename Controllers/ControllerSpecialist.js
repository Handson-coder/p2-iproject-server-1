const { Specialist } = require('../models')

class ControllerSpecialist {
	static async findAllSpecialists(req, res, next) {
		try {
			const result = await Specialist.findAll({
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

module.exports = ControllerSpecialist