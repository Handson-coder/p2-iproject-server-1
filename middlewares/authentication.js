const { verifyToken } = require('../helpers/jwt')
const { User } = require('../models')

async function authentication(req, res, next) {
    try {
        const { access_token } = req.headers
        if (access_token) {
            const verified = verifyToken(access_token)
            const user = await User.findByPk(verified.id)
            if (user) {
                req.user = {
                    id: user.id,
                    username: user.username,
                    email: user.email,
                    role: user.role,
                    phoneNumber: user.phoneNumber,
                    address: user.address,
                }
                next()
            } else {

                throw { name: "Invalid Token" }
            }
        } else {
            throw { name: 'Please Login First' }
        }
    } catch (err) {
        next(err)
    }
}

module.exports = authentication