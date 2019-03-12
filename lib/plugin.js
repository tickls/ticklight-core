'use strict';

const uid = require('./util/uid_gen');
const TicklsObject = require('./tickls_object');


class Plugin extends TicklsObject {

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