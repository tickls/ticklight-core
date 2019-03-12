'use strict';

const uidgen = require('./util/uid_gen');


class TicklightDevice {

    constructor(conf = {}) {
        this.uid = conf.uid || uidgen();
        this.conf = conf;
    }

    get name() {
        return this.uid;
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