'use strict';

const crypto = require('crypto');

/**
 * Generates a random uid.
 * @param {Number} count The random byte count. [Default = 12]
 * @param {bool} asBase64String When true a base64 encoded string is returned. Otherwise a buffer with random bytes will be returned. [Default = false]
 * @returns {String | Buffer} Returns either a base64 uid string or a uid byte Buffer.
 */
function generate(count = 12, plainBuffer = false) {
    const buf = crypto.randomBytes(count);

    if(!plainBuffer)
        return buf.toString('base64');

    return buf;
}

module.exports = generate;