'use strict';

const TicklsObject = require('./tickls_object');
const Error = require('./error');


class Service extends TicklsObject {

    initialize(config) {
        throw new Error.ShouldBeImplementedBySubclass();
    }
}

module.exports = Service;