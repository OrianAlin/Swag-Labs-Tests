function decodeData(username, password) {
    username = new Buffer(username, 'base64').toString('ascii')
    password = new Buffer(password, 'base64').toString('ascii')

    return {
        'username': username,
        'password': password
    }

}

module.exports = {
    decodeData
}