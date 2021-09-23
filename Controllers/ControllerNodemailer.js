const main = require('../helpers/nodemailer')

class ControllerNodemailer {
  static async chatWithDoctor(req, res, next) {
    const to = req.user.email
    const username = req.body.username
    const doctor = req.body.doctor
    try {
      await main(to, username, doctor)
      res.status(200).json({ message: 'Email Sent, Please check your email inbox' })
    } catch (err) {
      next(err)
    }
  }
}

module.exports = ControllerNodemailer