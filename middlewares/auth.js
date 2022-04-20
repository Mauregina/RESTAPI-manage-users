const jwt = require('jsonwebtoken')
const config = require('../config/config')

const auth = (req, res, next) => {
    const token_header = req.headers.authorization
    if (!token_header) return res.status(401).json({error: 'Token não enviado!'})

    jwt.verify(token_header, config.jwt_pass, (err, decoded) => {
        if (err) return res.status(401).json({error: 'Token inválido!'})
        res.locals.auth_data = decoded
        return next()
    })
}

module.exports = auth