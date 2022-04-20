const env = process.env.NODE_ENV || 'dev'

const config = () => {
    const DB_USER = process.env.DB_USER
    const DB_PASSWORD = process.env.DB_PASSWORD

    switch (env) {
        case 'dev':
            return {
                bd_string: `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.0svze.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
                jwt_pass: 'senha123',
                jwt_expired: '1d'

            }
        case 'hml':
            return {
                bd_string: `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.0svze.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
                jwt_pass: 'senha123',
                jwt_expired: '1d'
            }
        case 'prod':
            return {
                bd_string: `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.0svze.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
                jwt_pass: 'senha123',
                jwt_expired: '1d'
            }
    }        
}

console.log(`Iniciando a API em ambiente ${env.toUpperCase()}`)

module.exports = config()