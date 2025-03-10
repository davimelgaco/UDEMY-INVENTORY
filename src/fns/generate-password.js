const crypto = require('crypto')
const size = 12

function generatePassword () {
    return crypto.randomBytes(size).toString('hex')
}

module.exports = generatePassword