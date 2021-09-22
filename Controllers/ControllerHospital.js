const axios = require('axios')
const ROOT_URL = `https://www.halodoc.com`
const { Hospital, Province } = require('../models')
const { getPagination, getPagingData } = require('../helpers/paginations')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

class ControllerHospital {
	static async hospitalProfile(req, res, next) {
		try {
			const url = `${ROOT_URL}/api/rumah-sakit/v1/hospitals/slug/${req.params.slug}`
			const result = await axios.get(url)
			return res.status(200).json(result.data)
		} catch (err) {
			next(err)
		}
	}

	static async findAllHospitals(req, res, next) {
		const { page, size, province } = req.query
		const { limit, offset } = getPagination(page, size)
		const possibilityQuery = {
			attributes: ['id', 'name', 'address', 'region', 'province', 'slug', 'images', 'provinceId'],
			include: [
				{
					model: Province,
					attributes: {
						exclude: ['createdAt', 'updatedAt']
					}
				}
			]
		}
		if (province) {
			possibilityQuery.include[0].where = {
				id: {
					[Op.eq]: +province
				}
			}
		}
		let result;
		try {
			if (page || size) {
				possibilityQuery.limit = limit
				possibilityQuery.offset = offset
				if (possibilityQuery.limit > 15) {
					possibilityQuery.limit = 15
				}
				const response = await Hospital.findAndCountAll(possibilityQuery)
				result = getPagingData(response, page, limit)
			}
			if (result.length != 0 || result.hospitals.length != 0) {
				res.status(200).json(result)
			} else {
				throw ({
					name: "There's no data is equal like your filter that you've submited"
				})
			}
			// const result = await Hospital.findAll({
			// 	attributes: {
			// 		exclude: ['createdAt', 'updatedAt']
			// 	}
			// })
		} catch (err) {
			next(err)
		}
	}
}

module.exports = ControllerHospital