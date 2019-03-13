'use strict';

const uid = require('./util/uid_gen');
const TicklsObject = require('./tickls_object');


class Plugin extends TicklsObject {

    constructor(initUid) {
        super();

        if(initUid === undefined) {
            this.uid = uid();
        }
        else {
            this.uid = initUid;
        }
    }

    static get schema() {
        return {
            "id": "/Plugin",
            "type": "object",
            "properties": {
                "name": {"type": "string"}
            },
            "required": ["name"]
        }
    }

    pluginDescriptor() {
        return {
            
        }
    }
}

module.exports = Plugin;