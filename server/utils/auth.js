const jwt = require('jsonwebtoken');

const secret = 'mysecret';
const expiration = '2h'

module.exports = {
    authMiddleware({ req }) {
        let token = req.body.token || req.query.token || req.headers.authorization

        if(req.headers.authorization){
            token = token.split(' ').pop().trim();
        }

        if(!token) {
            return req
        }

        try {
            const { data } = jwt.verify(token, secret)
            req.user = data
        } catch (err) {
            console.error(err)
            console.log('invalid token')
        }

        return req
    },
    signToken({ firstname, email, _id }) {
        const payload = { firstname, email, _id }

        return jwt.sign({ data: payload }, secret, { expiresIn: expiration })
    }
}