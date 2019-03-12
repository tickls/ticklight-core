'use strict';

const uid = require('./util/uid_gen');

class Plugin {

    constructor({ uuid: undefined }) {
        if(uuid === undefined) {
            this.uuid = await uid();
        }
    }

    pluginDescriptor() {
        return {
            
        }
    }
}

module.exports = Plugin;