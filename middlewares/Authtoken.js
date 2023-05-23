const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

// Authorisation header
const AuthorizationMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization
  if (!authHeader) {
    return res.status(401).json({ message: 'Authorization header missing' })
  }
  const token = authHeader.split(' ')[1]
  //"YOUR_FIXED_AUTH_TOKEN"
  if (token !== process.env.ACCESS_TOKEN_SECRET) {
    return res.status(401).json({ message: 'Invalid authorization token' })
  }
  next()
}

module.exports = { AuthorizationMiddleware }
