'use strict';

const uidgen = require('./util/uid_gen');
const TicklsObject = require('./tickls_object');


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

}

class Switch extends TicklightDevice {
    
}

module.exports = {
    TicklightDevice,
    Light,
    Switch
}