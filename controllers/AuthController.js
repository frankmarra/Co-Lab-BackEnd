const { User } = require('../models')
const middleware = require('../middleware')

const Login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { userEmail: req.body.userEmail },
      raw: true
    })
    if (
      user &&
      (await middleware.comparePassword(
        user.userPasswordDigest,
        req.body.userPassword
      ))
    ) {
      let payload = {
        id: user.id,
        userEmail: user.userEmail,
        userName: user.userName
      }
      let token = middleware.createToken(payload)
      return res.send({ user: payload, token })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    throw error
  }
}

const Register = async (req, res) => {
  try {
    const { userEmail, userPassword, userName } = req.body
    let userPasswordDigest = await middleware.hashPassword(userPassword)
    const user = await User.create({ userEmail, userPasswordDigest, userName })
    res.send(user)
  } catch (error) {
    throw error
  }
}

module.exports = {
  Login,
  Register
}
