'use strict';

const uidgen = require('./util/uid_gen');


class TicklightDevice {

    constructor({ uid = undefined, conf = {} }) {
        this.uid = uid || uidgen();
        this.conf = conf;
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