export class AuthRequiredError extends Error {
  constructor(message = 'Authentication is required to access this page.') {
    super(message);

    this.name = 'AuthRequiredError';
  }
}

export class NotFoundError extends Error {
  constructor(message = "Sorry, but we didn't find what you are looking for.") {
    super(message);

    this.name = 'NotFoundError';
  }
}
