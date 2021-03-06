'use strict';


class TicklightError extends Error {
    constructor(message, statusCode = 500) {
        message = message || "Unspecified error.";

        super(message);

        this.statusCode = statusCode;
    }
}

class BadRequest extends TicklightError {
    constructor(message) {
        message = message || "Bad request.";

        super(message, 400);
    }   
}

class Unauthorized extends TicklightError {
    constructor(message) {
        message = message || "User not authorizated to do this. Make sure the Authorization header or UID header is set in your request.";

        super(message, 401);
    }
}

class Forbidden extends TicklightError {
    constructor(message) {
        message = message || "Access forbidden. Make sure you've the correct access rights."

        super(message, 403);
    }
}

class NotFound extends TicklightError {
    constructor(message) {
        message = message || "Requested resource not found.";

        super(message, 404);
    }
}

class Conflict extends TicklightError {
    constructor(message) {
        message = message || "";

        super(message, 409);
    }
}

class NotImplemented extends TicklightError {
    constructor(message) {
        message = message || "Function not implemented.";

        super(message, 501);
    }
}

class Timeout extends TicklightError {
    constructor(message) {
        message = message || "A timeout occurred.";

        super(message, 408);
    }
}

class ShouldBeImplementedBySubclass extends NotImplemented {
    constructor() {
        super("This method should be implemented by a subclass.");
    }
}

// System errors
class ConnectionError extends TicklightError {
    constructor(message) {
        super(message || "Connection error.", 1003);
    }
}

class IOError extends TicklightError {
    constructor(message) {
        super(message || "An IO error occurred.", 1001);
    }
}

class InvalidArgument extends TicklightError {
    constructor(message) {
        super(message || "Invalid argument passed.", 1002);
    }
}

module.exports = {
    TicklightError,
    BadRequest,
    Unauthorized,
    Forbidden,
    NotFound,
    Conflict,
    NotImplemented,
    Timeout,
    ShouldBeImplementedBySubclass,

    ConnectionError,
    IOError,
    InvalidArgument
}