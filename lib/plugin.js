'use strict';

const uid = require('./util/uid_gen');

class Plugin {

    constructor({ uuid: undefined }) {
        if(uuid === undefined) {
            this.uuid = uid();
        }
    }

    pluginDescriptor() {
        return {
            
        }
    }
}

module.exports = Plugin;