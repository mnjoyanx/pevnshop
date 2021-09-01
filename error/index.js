class ApiError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }

  static badRequest(message) {
    return new ApiError(message, 400);
  }

  static unauthorized(message) {
    return new ApiError(message, 401);
  }

  static forbidden(message) {
    return new ApiError(message, 403);
  }

  static notFound(message) {
    return new ApiError(message, 404);
  }
}

module.exports = ApiError;
