'use strict';

var Validator = require('jsonschema').Validator;
const { Error } = require('ticklight-core');


class TicklsObject {

    constructor() {
        TicklsObject.schemaValidator = undefined;
    }

    static get schema() {
        throw new Error.ShouldBeImplementedBySubclass();
    }

    static get validator() {
        
    }

    validate() {
        if(TicklsObject.schemaValidator === undefined) {
            TicklsObject.schemaValidator = new Validator();
        }

        const validationResult = TicklsObject.schemaValidator.validate(this, this.constructor.prototype);

        return validationResult;
    }
    mapProperties() {

    }
}

module.exports = TicklsObject;