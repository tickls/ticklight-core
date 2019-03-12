'use strict';

var Validator = require('jsonschema').Validator;
const { Error } = require('ticklight-core');


class TicklsObject {

    constructor() {
        TicklsObject.__schemaValidator = undefined;
    }

    static get schema() {
        throw new Error.ShouldBeImplementedBySubclass();
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
}

module.exports = TicklsObject;