const jwt = require('jsonwebtoken')
exports.jwt = (secret) => {
  return (req, res, next) => {
    if (!secret) {
      console.log('Secret key missing')
      res.status(500)
      res.json({
        status: 1,
        msg: 'Secret key missing'
      })
      return
    }

    try {
      jwt.verify(req.headers['x-generate-authorization'], secret, {
        algorithms: ['HS256'],
        ignoreExpiration: false
      })
      next()
    } catch (error) {
      console.log('Wrong authentication')

      res.status(401)
      res.json({
        status: 1,
        msg: 'Wrong authentication'
      })
    }
  }
}

exports.signJwt = (secret, data, expLengthInSecond) => {
  return jwt.sign(
    {
      data,
      exp: Math.floor(Date.now() / 1000) + expLengthInSecond
    },
    secret,
    { algorithm: 'HS256' }
  )
}
