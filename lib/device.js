'use strict';

const uidgen = require('./util/uid_gen');
const TicklsObject = require('./tickls_object');
const Error = require('./error');


class TicklightDevice extends TicklsObject {

    constructor(conf = {}) {
        super();

        this.uid = conf.uid || uidgen();
        this.conf = conf;
    }

    get description() {
        return `${this.name || ""} - ${this.uid}`;
    }
}

class Light extends TicklightDevice {

    get rgb() {
        throw new Error.ShouldBeImplementedBySubclass();
    }

    get state() {
        throw new Error.ShouldBeImplementedBySubclass();
    }

    setState(state) {

    }
}

class Switch extends TicklightDevice {
    
}

module.exports = {
    TicklightDevice,
    Light,
    Switch
}