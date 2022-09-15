const jwt = require('jsonwebtoken')
require('dotenv').config()

class TokenControllers {

    create(id = '') {
        return new Promise((resolve, reject) => {
            const payload = { id };

            jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: '1h'
            }, (err, token) => {
                if (err) {
                    console.log(err);
                    reject('No se pudo generar el token');
                } else {
                    resolve(token);
                }
            })
        })
    }

}

module.exports = new TokenControllers();