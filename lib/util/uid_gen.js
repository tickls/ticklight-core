function generate(count = 12) {
    return crypto.randomBytes(count).toString('base64');
}

module.exports = generate;