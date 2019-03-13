'use strict';

var Validator = require('jsonschema').Validator;
const { Error } = require('ticklight-core');


class TicklsObject {

    constructor() {
        TicklsObject.__schemaValidator = undefined;
    }

    static get schema() {
        return {
            "id": "/TicklsObject",
            "type": "object",
            "properties": {},
            "required": []
        }
    }

    static get validator() {
        
    }

    validate() {
        if(TicklsObject.__schemaValidator === undefined) {
            TicklsObject.__schemaValidator = new Validator();
        }

        const validationResult = TicklsObject.__schemaValidator.validate(this, this.constructor.prototype);

        return validationResult;
    }

    toJson() {
        let schema = this.constructor.schema;
        let outputObject = {};

        for(let key in schema.properties) {

            if(this[key] !== undefined) {
                outputObject[key] = this[key];
            }
        }

        return outputObject;
    }
}

module.exports = TicklsObject;