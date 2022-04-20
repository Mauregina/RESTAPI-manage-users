const { decode } = require('jsonwebtoken')
const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {
    const token_header = req.headers.authorization
    if (!token_header) return res.status(422).json({error: 'Token não enviado!'})
    
    jwt.verify(token_header, 'senha123', (err, decoded) => {
        if (err) return res.status(422).json({error: 'Token inválido!'})
        res.locals.auth_data = decoded
        return next()
    })
}

module.exports = auth