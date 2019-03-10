'use strict';

const Error = require('./error');

class Service {

    initialize(config) {
        throw new Error.ShouldBeImplementedBySubclass();
    }
}

module.exports = Service;