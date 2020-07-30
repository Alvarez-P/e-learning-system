function HttpError(message, code) {
    this.name = 'HttpError'
    this.code = code || 500
    this.message = message || 'An internal server error ocurred';
    this.stack = (new Error()).stack;
}

HttpError.prototype = Object.create(Error.prototype);
HttpError.prototype.constructor = HttpError;

module.exports = {
    HttpError
}