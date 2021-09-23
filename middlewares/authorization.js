const authorization = async (req, res, next) => {
  try {
    if (req.user.role == 'Customer') {
      next()
    } else {
      throw ({ name: 'Forbidden' })
    }
  } catch (err) {
    next(err)
  }
}

module.exports = authorization