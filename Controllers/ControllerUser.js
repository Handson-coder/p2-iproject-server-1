const { User } = require('../models')
const { signToken, verifyToken } = require('../helpers/jwt')
const { checkPassword } = require('../helpers/bcryptjs')
const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)


class ControllerUser {
	static async register(req, res, next) {
		const { username, email, password } = req.body
		try {
			const result = await User.create({ username, email, password, role: 'Customer' })
			res.status(201).json({ id: result.id, email: result.email })
		} catch (err) {
			next(err)
		}
	}

	static async login(req, res, next) {
		const { email, password } = req.body
		try {
			const user = await User.findOne({ where: { email } })
			if (!user) {
				throw ({ name: "Email/Password is wrong" })
			} else {
				if (checkPassword(password, user.password)) {
					const access_token = signToken({ id: user.id, email: user.email, role: user.role })
					res.status(200).json({ id: user.id, username: user.username, email: user.email, role: user.role, access_token })
				} else {
					throw ({ name: "Email/Password is wrong" })
				}
			}
		} catch (err) {
			next(err)
		}
	}

	static async googleAuthLogin(req, res, next) {
		try {
			const ticket = await client.verifyIdToken({
				idToken: req.body.idToken,
				audience: process.env.GOOGLE_CLIENT_ID
			})
			const { email, name } = ticket.getPayload()
			const [user, created] = await User.findOrCreate({
				where: { email },
				defaults: {
					username: name,
					email,
					password: email,
					role: "Customer",
				}
			})
			if (user) {
				const access_token = signToken({
					id: user.id,
					email: user.email,
					role: user.role
				})
				res.status(200).json({ id: user.id, username: user.username, role: user.role, email: user.email, access_token })
			}
		} catch (err) {
			next(err)
		}
	}

	static async userLoginned(req, res, next) {
		const { id } = req.user
		try {
			const access_token = req.headers.access_token
			const payload = verifyToken(access_token)
			const { email, role } = payload
			res.status(200).json({ id, username:req.user.username, email, role })
		} catch (err) {
			next(err)
		}
	}
}

module.exports = ControllerUser