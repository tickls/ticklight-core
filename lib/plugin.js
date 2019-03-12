'use strict';

const uid = require('./util/uid_gen');

class Plugin {

    constructor(initUid) {
        if(initUid === undefined) {
            this.uid = uid();
        }
        else {
            this.uid = initUid;
        }
    }

    pluginDescriptor() {
        return {
            
        }
    }
}

module.exports = Plugin;